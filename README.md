# Node.js Microservice Deployment on Kubernetes

This repository contains the configuration files and code necessary to deploy a Node.js microservice on a Kubernetes cluster.

## Overview

The project uses Docker to containerize the Node.js application and Kubernetes to orchestrate the deployment. The Kubernetes service is exposed through a LoadBalancer to allow external access.

## Prerequisites

- Git
- Docker
- Kubernetes cluster
- kubectl configured to communicate with your Kubernetes cluster
- Node.js and npm

## Repository Structure

- `deployment.yaml`: Kubernetes deployment configuration that defines the desired state of the application.
- `service.yaml`: Kubernetes service configuration that exposes the application to the internet.
- `Dockerfile`: Instructions for Docker to build the container image.
- `/src`: Source code directory for the Node.js application.
- `package.json`: Lists the Node.js application dependencies.

## Deployment Steps

### Set Up the Kubernetes Cluster

Ensure that your `kubectl` is configured to interact with your Kubernetes cluster:

```bash
gcloud container clusters get-credentials [CLUSTER_NAME] --region [CLUSTER_REGION]
