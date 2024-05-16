# End-to-End Continuous Integration and Continuous Deployment based on GitOps using GitHub Actions and Argo CD 🚀

This repository contains the code of the React application called ToDo-App. I've created this to Deploy it on Kubernetes cluster by GitOps workflow

## Architecture Overview 📚

We are going to build a CI/CD pipeline that will be triggered by a push to the main branch of the repository. **The pipeline will build the application, run the tests, and deploy the application to a Kubernetes cluster**. The pipeline will be implemented using GitHub Actions and ArgoCD.

**The architecture of the project is explained below:**

First, we have a **GitHub repository that contains the source code of the application**. The repository is connected to GitHub Actions, which will be used to build and deploy the application. The GitHub Actions workflow will be triggered by a push to the main branch of the repository. **The workflow will build the application, run the tests, and Push the Docker image to Docker Hub. And then It will Update the Image tag in the Manifest Repository**. The Manifest Repository is a separate GitHub repository that contains the Kubernetes manifests for the application. And our Argo CD will be watching this repository for changes. **Once the image tag is updated in the Manifest Repository, Argo CD will automatically deploy the new version of the application to the Kubernetes cluster**.

## Architecture
![Architecture Diagram](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4c7Sh3uq-myCRQ16bs0ktg.png)

## List of AWS services
- Amazon EKS 
- Amazon VPC
- Amazon  IAM
- Amazon EC2

## Usage 🛠️

1. Fork this repository and Manifest Repository to your GitHub account.
2. Add the following secrets to your GitHub repository:
   - `DOCKER_USERNAME`: Your Docker Hub username
   - `DOCKER_PASSWORD`: Your Docker Hub password
   - `Git_TOKEN`: A personal access token with the `repo` scope to access the Manifest Repository
3. Update your Argo CD application to watch the Manifest Repository.
4. Push a change to the main branch of the repository to trigger the CI/CD pipeline.
