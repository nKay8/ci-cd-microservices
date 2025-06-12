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
http://localhost:4000/orders
minikube service order-service

docker run -d --name jenkins \
  -p 9191:8080 -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts

Now you can open Jenkins at:
 http://localhost:9191 

 docker exec jenkins cat /var/jenkins_home/secrets/initialAdminPassword

docker stop jenkins
docker rm jenkins

( This will remove all saved Jenkins jobs, settings, and users:)
docker volume rm jenkins_home 
