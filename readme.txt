kubectl apply -f user-service/k8s/
kubectl apply -f order-service/k8s/
kubectl apply -f payment-service/k8s/

kubectl get pods

kubectl port-forward svc/order-service 8080:80
curl http://localhost:8080/orders

http://192.168.49.2:30581/orders

kubectl edit svc order-service

kubectl rollout restart deployment order-service

docker build -t nkay8/order-service:latest .
docker push nkay8/order-service:latest

kubectl port-forward svc/order-service 4000:80
http://localhost:127.0.0.1:39246/orders
minikube service order-service

http://192.168.49.2:30899/payments
minikube service payment-service


docker run -d --name jenkins \
  -p 9191:8080 -p 50000:50000 \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts-jdk11


Now you can open Jenkins at:
 http://localhost:9191 

 docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

docker stop jenkins
docker rm jenkins

( This will remove all saved Jenkins jobs, settings, and users:)
docker volume rm jenkins_home 



docker build -t jenkins-docker-enabled .


docker run -d --name jenkins `
  -p 9191:8080 -p 50000:50000 `
  -v //var/run/docker.sock:/var/run/docker.sock `
  -v jenkins_home:/var/jenkins_home `
  jenkins-docker
