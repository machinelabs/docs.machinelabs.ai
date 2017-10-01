---
title: Quickstart
type: guide
order: 3
vue_version: 2.4.4
dev_size: "262.63"
min_size: "80.86"
gz_size: "29.40"
ro_gz_size: "20.70"
---

## Introduction

This quickstart will teach you the basics to get up and running which MachineLabs.

We'll be using Keras / TensorFlow and the MNIST dataset to train a simple model how to recognize hand-written digits.

For more details on the data and the model, please refer to the TensorFlow documentation.

## Creating a fresh lab

To create a fresh lab, click the *New* button in the upper right corner. You can either choose to create a lab from an existing template or start from scratch to create a blank lab. For the purpose of this quickstart guide, we'd like to create a blank lab.

![Create a lab](labs/create_lab.png)

## Getting the dataset

To train our model we need to get access to the MNIST dataset.

You may be aware that using Keras we could directly import the MNIST dataset from `keras.datasets`, but for the purpose of this quickstart we'd rather like to fetch it manually so that you learn how to work with datasets when using the MachineLabs platform.

Every lab comes with an `ml.yaml` file by default that sets important configurations for the [execution](executions.html). Jump right in there and add the following section.

```yaml
inputs:
    - name: mnist.npz
      url: https://s3.amazonaws.com/img-datasets/mnist.npz
```

This configures the execution to fetch the `mnist.npz` from the specified Url and save it to `inputs/mnist.npz`. Notice that `inputs` is a special folder inside your code's execution directory which all our configured inputs are downloaded to before the actual execution starts to run the code.

The name that you specify for the input doesn't have to match the actual download name so that you can give different names to files that would otherwise conflict with their names. Notice though that it is mandatory to specify a name for each input even if we don't need a different name.

## Writing the code

Now that we've wired up our input let's write the actual code!

When we create a lab, an empty `main.py` is automatically generated for us.



```python
from __future__ import print_function
import numpy as np
from keras.models import Sequential
from keras.layers.core import Dense, Activation
from keras.optimizers import SGD
from keras.utils import np_utils

np.random.seed(1671) # for reproducibility

# network and training

NB_EPOCH = 200
BATCH_SIZE = 128
VERBOSE = 1
NB_CLASSES = 10 # number of outputs = number of digits
OPTIMIZER = SGD()
N_HIDDEN = 128
VALIDATION_SPLIT= 0.2 # how much TRAIN is reserved for VALIDATION

# data: shuffled and split between train and test sets
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# x_train is 60000 rows of 28x28 values --> reshaped in 60000 x 784
RESHAPED = 784

x_train = x_train.reshape(60000, RESHAPED)
x_test = x_test.reshape(10000, RESHAPED)
x_train = x_train.astype('float32')
x_test = x_test.astype('float32')

# normalize

x_train /= 255
x_test /= 255

print (x_train.shape[0], 'train samples')
print (x_test.shape[0], 'test samples')

# convert class vectors to binary class matrices
y_train = np_utils.to_categorical(y_train, NB_CLASSES)
y_test = np_utils.to_categorical(y_test, NB_CLASSES)

model = Sequential()
model.add(Dense(NB_CLASSES, input_shape=(RESHAPED,)))
model.add(Activation('softmax'))
model.summary()

model.compile(loss='categorical_crossentropy', optimizer=OPTIMIZER, metrics=['accuracy'])

history = model.fit(x_train, y_train, batch_size=BATCH_SIZE, epochs=NB_EPOCH, verbose=VERBOSE, validation_split=VALIDATION_SPLIT)
score = model.evaluate(x_test, y_test, verbose=VERBOSE)

print('Test score:', score[0])
print('Test accuracy', score[1])
```
