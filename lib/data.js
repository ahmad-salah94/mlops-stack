let data_analysis = [
    {
        id: 1,
        label: "Pandas",
        src: "/stackicons/pandas.svg",
        alt: "Pandas Icon",
        tag1: "Data Manipulation",
        tag2: "Data Analysis",
        tag3: "Python",
        description: "Pandas is a library providing high-performance, easy-to-use data structures and data analysis tools for Python.",
        advantage1: "Enables fast data cleaning and preparation.",
        advantage2: "Supports multiple file formats for data importing/exporting.",
        advantage3: "Offers extensive functions for data manipulation and analysis.",
        disadvantage1: "Can be memory-intensive with very large datasets."
    },
    {
        id: 2,
        label: "Apache Spark",
        src: "/stackicons/spark.svg",
        alt: "Apache Spark Icon",
        tag1: "Big Data",
        tag2: "Cluster Computing",
        tag3: "Analytics",
        description: "Apache Spark is a multi-language engine for executing data engineering, data science, and machine learning on single-node machines or clusters.",
        advantage1: "Handles large datasets across multiple nodes efficiently.",
        advantage2: "Integrates well with big data tools and frameworks.",
        advantage3: "Supports real-time data processing and analysis.",
        disadvantage1: "Complex to set up and manage."
    }
]

let experimentation = [
    {
        id: 1,
        label: "Jupyter Notebook",
        src: "/stackicons/jupyternotebook.svg",
        alt: "Jupyter Notebook Icon",
        tag1: "Interactive Computing",
        tag2: "Data Visualization",
        tag3: "Collaboration",
        description: "An open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text.",
        advantage1: "Supports over 40 programming languages, including Python, R, Julia, and Scala.",
        advantage2: "Facilitates data cleaning and transformation, numerical simulation, statistical modeling, data visualization, machine learning, and much more.",
        advantage3: "Enables sharing of notebooks for collaborative data science.",
        disadvantage1: "Can become disorganized and hard to navigate for complex projects."
    },
    {
        id: 2,
        label: "Google Colab",
        src: "/stackicons/googlecolab.svg",
        alt: "Google Colab Icon",
        tag1: "Cloud-based",
        tag2: "Free Access to GPUs",
        tag3: "Integration",
        description: "A free cloud service based on Jupyter Notebooks for machine learning education and research. It provides a collaborative environment for Python scripts and supports various machine learning libraries and frameworks.",
        advantage1: "Provides free access to GPUs and TPUs for better computation.",
        advantage2: "Enables real-time collaboration and easy sharing.",
        advantage3: "Seamless integration with Google Drive and other Google services.",
        disadvantage1: "Limited session times and resources for free versions."
    }
]

let feature_store = [
    {
        id: 1,
        label: "Feast",
        src: "/stackicons/feast.svg",
        alt: "Feast Icon",
        tag1: "Offline Store",
        tag2: "Online Store",
        tag3: "Feature Server",
        description: "Feast is an open-source feature store aiding ML teams in real-time model production, ensuring feature consistency across training and serving.",
        advantage1: "Manages offline and online stores for features.",
        advantage2: "Prevents data leakage with point-in-time feature sets.",
        advantage3: "Decouples ML from data infrastructure.",
        disadvantage1: "Might need integration effort with existing ML workflows."
    },
    {
        id: 2,
        label: "Hopsworks",
        src: "/stackicons/hopsworks.svg",
        alt: "Hopsworks Icon",
        tag1: "Data Governance",
        tag2: "Scalable Feature Store",
        tag3: "Full ML Lifecycle",
        description: "Hopsworks provides a feature store service that manages data for ML models, supporting the full lifecycle with data governance and project-based organization.",
        advantage1: "Offers a scalable feature store with project-based organization.",
        advantage2: "Supports end-to-end ML lifecycle management.",
        advantage3: "Includes strong data governance and compliance features.",
        disadvantage1: "May require setup and integration effort."
    },
]

let code_repository = [
    {
        id: 1,
        label: "GitHub",
        src: "/stackicons/github.svg",
        alt: "GitHub Icon",
        tag1: "Version Control",
        tag2: "Collaboration",
        tag3: "Integration",
        description: "GitHub is a code hosting platform for version control and collaboration, enabling developers to work together on projects from anywhere.",
        advantage1: "Extensive collaboration features like Pull Requests.",
        advantage2: "Integrates with many development tools and services.",
        advantage3: "Offers Actions for CI/CD pipelines.",
        disadvantage1: "Complexity can be overwhelming for new users."
    },
    {
        id: 2,
        label: "GitLab",
        src: "/stackicons/gitlab.svg",
        alt: "GitLab Icon",
        tag1: "DevOps Lifecycle",
        tag2: "Continuous Integration",
        tag3: "Security",
        description: "GitLab is an open-source code repository and collaborative development platform with integrated CI/CD, security, and more.",
        advantage1: "Single application for the entire DevOps lifecycle.",
        advantage2: "Built-in Continuous Integration and Continuous Deployment.",
        advantage3: "Strong focus on security and compliance features.",
        disadvantage1: "Setup and maintenance might require more resources."
    }
]

let ml_pipeline = [
    {
        id: 1,
        label: "DVC",
        src: "/stackicons/dvc.svg",
        alt: "DVC Icon",
        tag1: "Version Control",
        tag2: "Experiment Tracking",
        tag3: "Reproducibility",
        description: "Data Version Control (DVC) is an open-source tool for data and ML model versioning, supporting experiment tracking and workflow automation.",
        advantage1: "Integrates seamlessly with Git.",
        advantage2: "Supports data, model, and pipeline versioning.",
        advantage3: "Enables continuous integration and deployment.",
        disadvantage1: "Requires familiarity with version control systems."
    },
    {
        id: 2,
        label: "Metaflow",
        src: "/stackicons/metaflow.svg",
        alt: "Metaflow Icon",
        tag1: "Workflow Orchestration",
        tag2: "Scalability",
        tag3: "Reproducibility",
        description: "Metaflow is a human-centric framework that enables data scientists to build and manage real-life data science projects with ease.",
        advantage1: "Designed specifically for data science projects.",
        advantage2: "Supports large-scale data processing.",
        advantage3: "Improves reproducibility of ML workflows.",
        disadvantage1: "Primarily supports Python and R workflows."
    }
    
]

let model_registry = [
    {
        id: 1,
        label: "MLflow",
        src: "/stackicons/mlflow.svg",
        alt: "MLflow Icon",
        tag1: "Experiment Tracking",
        tag2: "Reproducibility",
        tag3: "Deployment",
        description: "MLflow is an open-source platform for managing the machine learning lifecycle, including experiment tracking, reproducibility, deployment, and a model registry.",
        advantage1: "Allows managing experiments and model metadata using CLI, Python, R, Java, and REST API.",
        advantage2: "Supports the packaging of data science projects for reproducibility.",
        advantage3: "Provides a central model store for versioning and managing ML models.",
        disadvantage1: "Complex setup might be required for first-time users."
    },
    {
        id: 2,
        label: "Comet ML",
        src: "/stackicons/cometml.svg",
        alt: "Comet ML Icon",
        tag1: "Experiment Tracking",
        tag2: "Model Optimization",
        tag3: "Collaboration",
        description: "Comet ML is a platform for tracking, comparing, explaining, and optimizing ML models, supporting various ML libraries and frameworks.",
        advantage1: "Enables visualization and comparison of machine learning experiments.",
        advantage2: "Supports a wide range of machine learning libraries.",
        advantage3: "Facilitates collaboration among team members.",
        disadvantage1: "May be overwhelming for new users due to its extensive features."
    },
    {
        id: 3,
        label: "Weights & Biases",
        src: "/stackicons/weightsandbiases.svg",
        alt: "Weights & Biases Icon",
        tag1: "Experiment Tracking",
        tag2: "Model Versioning",
        tag3: "Hyperparameter Optimization",
        description: "Weights & Biases provides tools for experiment tracking, model versioning, and hyperparameter optimization, enhancing the ML development workflow.",
        advantage1: "User-friendly central dashboard for ML experiments.",
        advantage2: "Integration with multiple machine learning libraries.",
        advantage3: "Logging of artifacts and visualization of datasets.",
        disadvantage1: "Might require integration efforts with existing ML workflows."
    },
    {
        id: 4,
        label: "Neptune.ai",
        src: "/stackicons/neptuneai.svg",
        alt: "Neptune.ai Icon",
        tag1: "Metadata Storage",
        tag2: "Management",
        tag3: "Model Registry",
        description: "Neptune.ai focuses on metadata storage and management, aiding teams in logging, organizing, and storing metadata for ML models.",
        advantage1: "Efficient ML data store for metadata management.",
        advantage2: "Artifact and model metadata logging capabilities.",
        advantage3: "Database dashboard with intuitive data visualizations.",
        disadvantage1: "May be specialized towards metadata management, lacking broader ML lifecycle tools."
    }
]

let model_serving = [
    {
        id: 1,
        label: "Modelbit",
        src: "/stackicons/modelbit.svg",
        alt: "Modelbit Icon",
        tag1: "Scalability",
        tag2: "Performance",
        tag3: "Model Lifecycle Management",
        description: "Modelbit is a cloud-native platform designed for deploying, serving, and managing machine learning models. It automates model deployment allowing easy transition from training to production.",
        advantage1: "Supports various deployment options like serverless functions and Kubernetes clusters.",
        advantage2: "Provides automatic model versioning, A/B testing, and canary releases.",
        advantage3: "Ensures optimal resource utilization and low latency through automatic scaling.",
        disadvantage1: "Focuses more on cloud-native technologies which might require adaptation for traditional infrastructures."
    },
    {
        id: 2,
        label: "TensorFlow Serving",
        src: "/stackicons/tensorflowserving.svg",
        alt: "TensorFlow Serving Icon",
        tag1: "Flexibility",
        tag2: "Efficiency",
        tag3: "Scalability",
        description: "TensorFlow Serving is an open-source platform aimed at serving TensorFlow models in production environments. It provides a flexible and efficient way for deploying models as services.",
        advantage1: "Supports various deployment scenarios including standalone servers and Kubernetes.",
        advantage2: "Provides gRPC and REST API for easy integration with client applications.",
        advantage3: "Allows for model versioning and A/B testing for seamless updates.",
        disadvantage1: "Primarily designed for TensorFlow models which may limit its use with other frameworks."
    },
    {
        id: 3,
        label: "KServe",
        src: "/stackicons/kserve.svg",
        alt: "KServe Icon",
        tag1: "Kubernetes-native",
        tag2: "Scalability",
        tag3: "Extensibility",
        description: "KServe provides a Kubernetes-native way to serve machine learning models, leveraging the scalability and flexibility of Kubernetes for model deployment.",
        advantage1: "Supports autoscaling based on incoming traffic for efficient resource use.",
        advantage2: "Integrates with model registries and artifact stores for seamless model retrieval and deployment.",
        advantage3: "Offers a pluggable architecture for customizing serving pipelines.",
        disadvantage1: "Requires familiarity with Kubernetes for setup and management."
    },
    {
        id: 4,
        label: "Seldon",
        src: "/stackicons/seldon.svg",
        alt: "Seldon Icon",
        tag1: "Unified Framework",
        tag2: "Model Serving Scenarios",
        tag3: "Scalability",
        description: "Seldon is an open-source platform that facilitates the deployment, serving, and management of machine learning models, suitable for a wide range of deployment scenarios.",
        advantage1: "Supports a broad range of serving scenarios including real-time and batch processing.",
        advantage2: "Utilizes a standardized format for model packaging and deployment.",
        advantage3: "Enables A/B testing and can handle complex model graphs.",
        disadvantage1: "May involve a learning curve to fully leverage its comprehensive features."
    }
]

let experimentTracking_metadataStore = [
    {
        id: 1,
        label: "MLflow",
        src: "/stackicons/mlflow.svg",
        alt: "MLflow Icon",
        tag1: "Experiment Tracking",
        tag2: "Model Registry",
        tag3: "Project Packaging",
        description: "MLflow is an open-source platform assisting in managing the ML lifecycle, including experiment tracking, model registry, and reproducibility.",
        advantage1: "Enables storing and accessing code, data, configurations, and results.",
        advantage2: "Facilitates reproducibility with MLflow Projects and MLflow Models.",
        advantage3: "Includes a central model store for managing machine learning models.",
        disadvantage1: "Interface may lag with hundreds or thousands of runs; lacks advanced team collaboration features."
    },
    {
        id: 2,
        label: "Neptune",
        src: "/stackicons/neptuneai.svg",
        alt: "Neptune Icon",
        tag1: "ML Metadata",
        tag2: "Model Registry",
        tag3: "Experiment Tracking",
        description: "Neptune aids teams in organizing ML metadata and supports the lifecycle from experiment tracking to model deployment.",
        advantage1: "Centralized store for all ML experiments and metadata.",
        advantage2: "Enables live monitoring of model training and evaluations.",
        advantage3: "Integrates with 30+ tools including TensorFlow, Keras, and MLflow.",
        disadvantage1: "Set up and integration may require initial learning curve."
    }
]

let model_monitoring = [
    {
        id: 1,
        label: "Evidently AI",
        src: "/stackicons/evidentlyai.svg",
        alt: "Evidently AI Icon",
        tag1: "Data Quality",
        tag2: "Data Drift",
        tag3: "Model Performance",
        description: "Evidently AI is an open-source ML observability platform for evaluating, testing, and monitoring ML models from validation to production.",
        advantage1: "Provides comprehensive view of data and ML model quality.",
        advantage2: "Supports detailed monitoring for NLP and LLM models.",
        advantage3: "Offers easy integration with the existing ML workflow.",
        disadvantage1: "Might require technical understanding for deeper insights."
    },
    {
        id: 2,
        label: "Grafana",
        src: "/stackicons/grafana.svg",
        alt: "Grafana Icon",
        tag1: "Visualization",
        tag2: "Analytics",
        tag3: "Alerting",
        description: "Grafana is an open-source platform for monitoring and observability that allows you to query, visualize, alert on and understand your metrics.",
        advantage1: "Robust visualization options with dashboards.",
        advantage2: "Supports multiple data sources including Prometheus.",
        advantage3: "Advanced alerting and notification features.",
        disadvantage1: "Setup and query language might be complex for beginners."
    },
    {
        id: 3,
        label: "Prometheus",
        src: "/stackicons/prometheus.svg",
        alt: "Prometheus Icon",
        tag1: "Monitoring",
        tag2: "Alerting",
        tag3: "Time Series",
        description: "Prometheus is an open-source systems monitoring and alerting toolkit originally built at SoundCloud.",
        advantage1: "Powerful data model and query language.",
        advantage2: "Multi-dimensional data collection.",
        advantage3: "Efficient storage and powerful alerts.",
        disadvantage1: "May require additional tools for log and trace monitoring."
    }
]

module.exports = {
    data_analysis,
    experimentation,
    feature_store,
    code_repository,
    ml_pipeline,
    model_registry,
    model_serving,
    experimentTracking_metadataStore,
    model_monitoring
}