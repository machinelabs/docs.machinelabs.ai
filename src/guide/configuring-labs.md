---
title: Configuring labs
type: guide
order: 4
---

<p class="tip">MachineLabs is currently in private beta. <strong>To follow this guide you need to be part of the private beta program</strong>. If you haven't done so yet, login at <a href="https://machinelabs.ai/editor" title="MachineLabs Editor">machinelabs.ai</a> to become part of the next batch. We onboard new users weekly.</p>

Labs can be configured in many different ways. We often want to specify what datasets should be used and where they come from, which Machine Learning framework or library we want to run our code on, or maybe our lab is a script that needs command line parameters to work.

This and many more things can be configured in every lab's `ml.yaml` configuration file and in this section we'll explore what configurations MachineLabs supports.

## ml.yaml

Every created lab comes with an `ml.yaml` configuration file in which all configurations can be done. An `ml.yaml` file is by no means more special than other `.yaml` files. This means that we can just use normal YAML syntax to configure our labs.

<p class="tip">A lab must have an `ml.yaml` file, otherwise it won't be executable.</p>

A configuration setting usually comes with a name followed by one or more values. For example, if we want to configure a environment in which our lab is executed, we can use MachineLabs' `dockerImageId` property with a dedicated value:

```yaml
dockerImageId: keras_v2-0-x_python_3-1
```

If a configuration property can have multiple values, we specificy this as a list like this:

```yaml
inputs:
  - name: some-value
    url: https://some-url.com
```

In this case we're configuring a [lab input](#lab-inputs), which can be a dataset that will be fetched from a specified `url`. Notice that `inputs` is the configuration property while `name` and `url` a part of a single configuration item, which is part of a list of values.

Let's take a look at what configuration options are available in MachineLabs.

## Lab environment

Every lab we execute will be executed in a certain environment. The environment describes things like what programming language and libraries will be available at execution time.

MachineLabs uses [docker](https://docker.com) containers to run labs in isolated and reproducable environments. It comes with a set of prebuilt images that we can use to execute our code. To specify a lab's environment, we use the `dockerImageId` configuration property.

```yaml
dockerImageId: docker_image_name
```

The following docker images are supported (more will be added in the near future):

- **keras_v2-0-x_python_3-1** - Keras 2.0.x and Python 3.1
- **keras_v2-0-x_python_2-1** - Keras 2.0.x and Python 2.1
- **tensorflow_v1-4-x-gpu_python_3-1** - GPU-enabled Tensorflow 1.4.x, Keras 2.1.x and Python 3.1
- **tensorflow_v1-4-x-gpu_python_2-1** - GPU-enabled Tensorflow 1.4.x, Keras 2.1.x and Python 2.1

This means, if we want to run our lab with Keras version 2.0.x and Python version 3.1, our configuration would look like this:

```yaml
dockerImageId: keras_v2-0-x_python_3-1
```

Configuring custom docker images is a feature that is planned for future versions.

## Lab inputs (datasets)

Obviously there's no Machine Learning without data. Labs need access to datasets and one way to get hold of them is using **inputs**. Inputs are basically metadata that describe what data needs to be downloaded before a lab is executed.

An input has a `url`, which is the endpoint from which that data should be downloaded from, and a `name`, which specifies under what name the data is stored on the file system in a special `inputs` directory, so it can be later accessed by the lab. MachineLabs has full internet access so we can basically download from any reachable place.

<p class="tip">All inputs are downloaded in a special `inputs` directory on the root level of where the lab's code lives and can be accessed from within labs using common file system operations.</p>

For example, the following configuration sets up an input that fetches the famous MNIST dataset and saves it as `mnist.npz` into the `inputs `directory (note that the `name` property is mandatory, even though we might not need it all the time).

```yaml
inputs:
  - name: mnist.npz
    url: https://s3.amazonaws.com/img-datasets/mnist.npz
```

If there's multiple datasets to download, no problem. We can simply add more inputs to the list. All inputs will then be downloaded concurrently:

```yaml
inputs:
  - name: mnist.npz
    url: https://s3.amazonaws.com/img-datasets/mnist.npz
  - name: reuters.npz
    url: https://s3.amazonaws.com/text-datasets/reuters.npz
  - name: imdb.npz
    url: https://s3.amazonaws.com/text-datasets/imdb.npz
```

<p class="tip">Soon MachineLabs will support **mounting custom datasets** that can be uploaded and shared across labs, so data doesn't have to be downloaded every single time a lab is executed.</p>

## Script parameters

Every now and then we would like to allow configurable parameters for our own scripts or execute third-party scripts that expect parameters. Script parameters can be configured using the `parameters` property. `parameters` is a list of parameters that will be passed to our entry file (e.g. `main.py`) in the same order they are specified in the `ml.yaml`.

<p class="tip">Script parameters are executed in the order they are specified, allowing positional arguments as well!</p>

`parameters` is a list of `pass-as` properties that gives us all the freedom we need to configure different kind of script parameters.

```yaml
parameters:
  - pass-as: '--foo=bar'
  - pass-as: 'some-value'
```

In a Python environment, this would be equivalent to executing (assuming our script is called `main.py`):

```sh
$ python main.py --foo=bar some-value 
```

A very good example to see script parameters in action is MachineLabs [Neural Style Transfer Lab](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=editor). 

## Hardware configuration

Obviously, the hardware on which we execute our experiments has a big impact on how much time is being spent on, for example, training a neural net. That's why we often want to make sure our code is executed on **GPU-accelerated machines**. MachineLabs supports CPU and GPU hardware.

We will open up possible hardware configurations in the future but for now every lab is executed on CPU hardware by default. To run our labs on GPU-accelerated machines, all we have to do is to set the `hardwareType` configuration to `gpu` like this:

```yaml
hardwareType: gpu
```
Once that is done, we need to make sure that we're configuring a GPU-enabled lab environment as well. For example:

```yaml
dockerImageId: tensorflow_v1-4-x-gpu_python_2-1
```

GPU support isn't available to everyone yet. However, it can easily be enabled by [becoming a Patreon](https://www.patreon.com/machinelabs) for the MachineLabs project.

<p class="tip">During private beta, **GPU support is only enabled for Patreon backers**. Thank you for your support!</p>

## Cheat Sheet

| Property        | Description |
| ------------- |-------------|
| `dockerImageId`      | Specifies docker container environment for lab execution. |
| `inputs`      | Specifies which data(sets) need to be downloaded before the lab executes.|
| `parameters` | Configures script parameters passed to the entry script (e.g. `main.py`)     |
| `hardwareType` | Sets the hardware on which your lab is executed. This can be either `cpu` (default) or `gpu`. |

