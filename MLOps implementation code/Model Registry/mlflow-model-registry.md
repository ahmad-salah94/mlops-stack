# MLflow Model Registry

The MLflow Model Registry is a central component of the MLflow ecosystem and serves as a centralized repository for machine learning models. It supports the management of the entire model lifecycle, from development to staging and production. The MLflow Model Registry is installed together with the MLflow Tracking Server and can be used immediately. It is possible to use the two components independently, either utilizing only the Tracking Server or only the Model Registry.

A crucial aspect of the MLflow Model Registry is the use of the MLflow Model Format for storing models. This format is particularly flexible and supports various framework-specific formats, also known as "flavors." For instance, models created in TensorFlow, PyTorch, Scikit-Learn, and other frameworks can be stored in their native formats within the MLflow system.

Additionally, the MLflow Model Format provides the ability to store models in a framework-independent manner as ONNX (Open Neural Network Exchange). This approach offers several advantages:

- Framework Independence: A model stored as ONNX is not tied to the framework in which it was originally developed, promoting interoperability and flexibility as the model can be deployed in a variety of environments without being bound to specific framework versions or languages.

- Simplified Model Serving: The use of the ONNX format significantly simplifies model deployment, as ONNX models are compatible with many serving tools and platforms. This facilitates integration into production environments and accelerates the transition from development to production.

To store models in the MLflow Model Registry, there are two approaches. The first approach, illustrated in Figure 1, is directly through the MLflow user interface. This route is particularly convenient as the model can first be examined and tested with other models on the user interface before being registered.

![Register Model via UI](mlflflow%20model%20regi.png)

*Figure 1: Registering a model through the user interface*

![MLflow Model Registry UI](mlflow%20models.png)

*Figure 2: MLflow Model Registry User Interface*

The second approach is through code, as shown in Figure 3. If the machine learning model to be registered is created within an experiment, it is automatically logged in MLflow and can then be registered using `mlflow.register_model()`. However, if the model was created outside of an experiment, it should first be logged in MLflow with `mlflow.log` and then registered.

A particularly useful feature of the Model Registry, as shown in Figure 2, is that models in the MLflow Model Registry can be assigned to different stages such as "Staging," "Production," or "Archived." Teams can review the model versions assigned to the different stages and promote models to production based on their requirements. All changes to the model status are logged in the registry, ensuring full traceability.