---
title: Install Keras3 with TensorFlow using Conda
description: While trying to install the latest version of Keras (3.4.1) with TensorFlow,I ran into some dependency issues that many evelopers might find frustrating.After a bit of troubleshooting, I was able to solve the problem and thought I'd share the solution here in case it helps anyone facing similar challenges.
tags:
  - tensorflow
  - keras
  - conda
  - python
  - dependency_management
  - machine_learning
publishedOn: 2024-10-16
tutorial:
  slug: install-last-version-keras-tensorflow
  title: Introduction
  homePage: true
imageSrc: ./images/keras-tensorflow-logo.jpg
imageAlt: Tensorflow and keras logos
imageCreditName: Keras's Blog
imageCreditUrl: https://blog.keras.io/img/keras-tensorflow-logo.jpg
---

# Install Keras3 with TensorFlow using Conda

While trying to install the latest version of [Keras](https://keras.io/) (3.4.1) with [TensorFlow](https://www.tensorflow.org/?hl=fr), I ran into some dependency issues that many developers might find frustrating. After a bit of troubleshooting, I was able to solve the problem and thought I'd share the solution here in case it helps anyone facing similar challenges.

## The Problem

When I tried to install **`Keras 3.4.1`** using [Conda](https://docs.anaconda.com/miniconda/) with **`TensorFlow 2.17`**, I encountered the following error:

```
LibMambaUnsatisfiableError: Encountered problems while solving:
  - nothing provides bleach 1.5.0 needed by tensorboard-1.6.0-py27hf484d3e_0
```

The conflict involved dependencies between **`tensorboard`** and **`bleach`**, along with version issues around **`TensorFlow`** and **`Python`**. I was getting errors about incompatible versions of Python and some packages that didn't seem to exist.

## The Solution

Here's how I fixed the issue:

1. **Update Conda**: First, I ensured that Conda was up to date to avoid any versioning conflicts.
> Do not forget to deactivate the running conda environment.

```bash
conda update conda
conda config --add channels conda-forge
```

2. **Create a Clean Environment**: I created a new Conda environment with a compatible version of Python to isolate the issue.

```bash
conda create -n tf_keras_env python=3.9
conda activate tf_keras_env
```

3. **Install TensorFlow and Keras with Conda**: Instead of using pip, I wanted to keep using  
`conda` to install TensorFlow and Keras, which handled the dependencies much better.

```bash
conda install tensorflow==2.17.0 keras==3.4.1
```

This avoided the issues I was having with `tensorboard` and `bleach` when using pip.

4. **Pinning TensorBoard and bleach**: In case you still run into issues, you can manually install the required versions of `bleach` and `tensorboard` before installing Keras and TensorFlow:

```bash
conda install bleach=4.1.0 tensorboard=2.17.0
```

Then, proceed with the TensorFlow and Keras installation.

## Conclusion

Dependency conflicts like these can be tricky, but by updating Conda, creating a clean environment, and continuing with conda for the installation, I was able to solve the issue. Hopefully, this guide can save you some time if you're stuck with similar errors.

---