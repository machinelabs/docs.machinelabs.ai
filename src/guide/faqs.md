---
title: FAQs
type: guide
order: 1
---

<p class="tip">MachineLabs is currently in private beta. <strong>To follow this guide you need to be part of the private beta program</strong>. If you haven't done so yet, login at <a href="https://machinelabs.ai/editor" title="MachineLabs Editor">machinelabs.ai</a> to become part of the next batch. We onboard new users weekly.</p>

## General

### What can I do with MachineLabs?

MachineLabs is an online code editor with access to TensorFlow / Keras and all the standard Python libraries one needs to do Machine Learning. You can do pretty much everything that is possible with these frameworks and libraries. For instance, here's a lab with several executions [demoing recognition of hand-written digits](https://machinelabs.ai/editor/r1JhQGJDb/1501666244327-Hyh6jfJw-?file=main.py) using the popular MNIST dataset.

And here's another one [demoing a neural style transfer](https://machinelabs.ai/editor/ryGF9Mxgz/1511182373584-ByC7lLlef?file=main.py&tab=outputs&preview=-KzOUI2diq74q6qdQVXR) (aka build your own PRISMA). You might want to read the [dedicated blog post](https://blog.machinelabs.ai/2017/11/20/announcing-gpu-support-and-revisiting-the-neural-style-transfer/) as well!

### What libraries are supported?

Right now we provide docker images with languages and libraries listed [here](/guide/configuring-labs.html#Lab-environment). However, we keep adding more docker images in the future to add support for more libraries in different versions. 

In fact, soon you'll be able to spin up your own docker images with any environment you like!

### How much execution time do I have?

During our private beta you get **72 hours of CPU time per month**.

### Can I run my code on GPU-accelerated hardware?

Yes you can! GPU support is available and has to be enabled for your account during our **Private Beta**. Read [this section](/guide/configuring-labs.html#Hardware-configuration) of our documentation to learn how to configure it. We also have plenty [GPU related questions](#gpu)!

### How do I get started?

We know that getting started with Machine Learning is hard. That's why we've created a [Quickstart guide](/guide/quickstart.html) that should get you up and running in no time! It's also always good to keep an eye on our [examples](/examples/index.html).

### How do I become part of the Private Beta?

Easy. Simply visit [our app](https://machinelabs.ai) and login with your GitHub account. We onboard new users weekly.

### How do I get access to datasets?

You have unlimited internet access in your lab, which means you can access any dataset you like. The easiest way to fetch datasets would be to specify them as inputs in the ml.yaml file. Checkout our docs on [Lab Inputs](/guide/configuring-labs.html#Lab-inputs-datasets) to learn how to do that.

We're also working on a new feature that lets you mount any data of any size at runtime of your lab, so you don't have to download your inputs every time you hit the run button.

### How can I save and download output data?

All you have to do is to write your generated files to `./outputs` and we'll make sure to upload them once your execution is done, so they become available in the outputs view. Take a look at [this lab](https://machinelabs.ai/editor/rJQrQ5wjZ/1506415557004-HkTTQ5Dob?file=ml.yaml&tab=outputs) to see it in action.

Outputs can also be requested via our [REST API](https://blog.machinelabs.ai/2017/10/16/new-rest-api-and-folder-support/).

### How can I access trained models from other labs?

This can be easily done by combining [Lab inputs](/guide/configuring-labs.html#Lab-inputs-datasets) with our [REST API](https://blog.machinelabs.ai/2017/10/16/new-rest-api-and-folder-support/)

## GPU

### How do I enable GPU suppor for my account?

There's two ways to enable GPU support for you account **during our private beta**:

- [Become a Patreon](https://www.patreon.com/machinelabs) for the MachineLabs project
- Create awesome labs that others can learn from

If you think the latter applies, please reach out to us [via email](mailto:hello@machinelabs.ai) so we can enable GPU support for you right away!

### Why do I have to pay for GPU support?

GPU is very expensive. We are a small team with a tight budget trying to move the whole Machine Learning community forward. We believe it is important to not leave AI exclusively to the bigger companies but rather have some small indie teams go working on it as well. You can make a difference by supporting us on our mission!

### How much do I need to pledge?

We enable GPU support for all backers that are backing $10 or more per month. 

### How many GPU hours do I get?

You’ll get rewarded with **20 GPU hours on top of the 72 CPU hours** every single month.

### Is there another way to enable GPU support?

Yes! We enable GPU support for selected users that support us by creating awesome labs or embedding labs in their blog posts. Reach out to us [via email](mailto:hello@machinelabs.ai) or [Twitter](https://twitter.com/machinelabs_ai) and let us know if you’ve created something we should know about!

### How long does it take to activate GPU support?

Bear with us! Enabling GPU support for our Patreons is a manual process for the time being. Please give us 24 hours to enable your account and get back to you. If your GPU support isn’t enabled after 24 hours, please [shoot us an email](mailto:hello@machinelabs.ai).

## Pricing

### Which pricing plan fits best for me?

Right now MachineLabs is in Private Beta and **we're still working out the pricing plans**. This means you don't have to worry about pricing at all and simply participate in our Private Beta until we announce changes on this regard. The only thing you need to pay for would be GPU support by [becoming a Patreon](https://www.patreon.com/machinelabs) for the MachineLabs project.

## Company

### Who is behind MachineLabs?

MachineLabs is run by the same people that also run [thoughtram](https://thoughtram.io).

### Are you hiring?

Not yet! Since we're 100% bootstrapped we're on a very tight budget, but we're working hard on making MachineLabs a profitable company so we can hire talented people that helps us on our mission.
