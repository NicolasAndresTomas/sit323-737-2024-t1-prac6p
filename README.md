## Deployment Steps

### Ensure that your `kubectl` is configured to interact with your Kubernetes cluster:

gcloud container clusters get-credentials [CLUSTER_NAME] --region [CLUSTER_REGION]

## Creating the Docker Image

### Build your Docker image using the provided Dockerfile

docker build -t [DOCKER_HUB_USERNAME]/[IMAGE_NAME]:[TAG] .

### Build your Docker image using the provided Dockerfile

docker push [DOCKER_HUB_USERNAME]/[IMAGE_NAME]:[TAG]

## Deploying to Kubernetes

### Apply the Kubernetes configurations using kubectl:

kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

## Verify the Deployment

### Confirm the status of your deployment and pods:

kubectl get deployments
kubectl get pods

### Check the service to retrieve the external IP address:

kubectl get services

## Accessing the Application

### The Node.js microservice can be accessed through the external IP provided by the LoadBalancer:

http://[EXTERNAL-IP]:3000
