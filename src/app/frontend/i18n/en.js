export default {

  // common
  "OK": "OK",
  "Cancel": "Cancel",
  "Name is required": "Name is required",
  "Learn more": "Learn more",

  // src/app/frontend/replicationcontrollerlist/replicationcontrollercard.html
  "One or more pods have errors": "One or more pods have errors",
  "One or more pods are in pending state": "One or more pods are in pending state",
  "pending": "pending",
  "running": "running",
  "failed": "failed",
  "desired": "desired",
  "Description": "Description",
  "Image": "Image",
  "Age": "Age",
  "Internal endpoint": "Internal endpoint",
  "External endpoint": "External endpoint",
  "none": "none",
  "Created at": "Created at",

  // src/app/frontend/replicationcontrollerlist/replicationcontrollercardmenu.html
  "View details": "View details",
  "Edit pod count": "Edit pod count",
  "Delete": "Delete",

  // src/app/frontend/replicationcontrollerlist/logsmenu.html
  "Logs": "Logs",
  "Log": "Logs",
  "Pod": "Pod",
  "Running since": "Running since",
  "Not running": "Not running",

  // src/app/frontend/replicationcontrollerdetail/updatereplicas.html
  "Set desired number of pods": "Set desired number of pods",
  "will be updated to reflect the desired count": "will be updated to reflect the desired count",
  "Current status": "Current status",
  "created": "created",
  "Number of pods": "Number of pods",

  // src/app/frontend/deploy/createnamespace.html
  "Create a new namespace": "Create a new namespace",
  "The new namespace will be added to the cluster": "The new namespace will be added to the cluster",
  "Namespace name": "Namespace name",
  "Name must be alphanumeric and may contain dashes": "Name must be alphanumeric and may contain dashes",
  "Name is too long": "Name is too long",

  // src/app/frontend/deploy/createsecret.html
  "Create a new image pull secret": "Create a new image pull secret",
  "Secret name": "Secret name",
  "Name must follow the DNS domain name syntax <br>(e.g. new.image-pull.secret)": "Name must follow the DNS domain name syntax <br>(e.g. new.image-pull.secret)",
  "Name length cannot exceed": "Name length cannot exceed",
  "characters": "characters",
  "A secret with the specified name will be added to the cluster in the namespace": "A secret with the specified name will be added to the cluster in the namespace",
  "Image pull secret data": "Image pull secret data",
  "Data is required": "Data is required",
  "Data must be Base64 encoded": "Data must be Base64 encoded",
  "Specify the data for your secret to hold. The value is the Base64 encoded content of a .dockercfg file": "Specify the data for your secret to hold. The value is the Base64 encoded content of a .dockercfg file",
  "Create": "Create",

  // src/app/frontend/deploy/deploy.html
  "Deploy a Containerized App": "Deploy a Containerized App",
  "Specify app details below": "Specify app details below",
  "Upload a YAML or JSON file": "Upload a YAML or JSON file",
  "Deploy": "Deploy",

  // src/app/frontend/deploy/deployfromsettings.html
  "App name": "App name",
  "Application name is required": "Application name is required",
  "Application with this name already exists within namespace": "Application with this name already exists within namespace",
  "Application name should contain only lowercase letters, numbers, and '-' between words": "Application name should contain only lowercase letters, numbers, and '-' between words",
  "Application name should have no more than 63 characters": "Application name should have no more than 63 characters",
  "An 'app' label with this value will be added to the Replication Controller and Service that get deployed": "An 'app' label with this value will be added to the Replication Controller and Service that get deployed",
  "Container image": "Container image",
  "Container image is required": "Container image is required",
  "Enter the URL of a public image on any registry, or a private image hosted on Docker Hub or Google Container Registry": "Enter the URL of a public image on any registry, or a private image hosted on Docker Hub or Google Container Registry",
  "Number of pods is required": "Number of pods is required",
  "Number of pods must be a positive integer": "Number of pods must be a positive integer",
  "Number of pods must be at least 1": "Number of pods must be at least 1",
  "A Replication Controller will be created to maintain the desired number of pods across your cluster": "A Replication Controller will be created to maintain the desired number of pods across your cluster",
  "Ports are optional. If specified, a Service will be created mapping the Port (incoming) to a target Port seen by the container": "Ports are optional. If specified, a Service will be created mapping the Port (incoming) to a target Port seen by the container",
  "The internal DNS name for this Service will be": "The internal DNS name for this Service will be",
  "Expose service externally": "Expose service externally",
  "The description will be added as an annotation to the Replication Controller and displayed in the application's details": "The description will be added as an annotation to the Replication Controller and displayed in the application's details",
  "Labels": "Labels",
  "Key": "Key",
  "Value": "Value",
  "Namespace": "Namespace",
  "Namespaces let you partition resources into logically named groups": "Namespaces let you partition resources into logically named groups",
  "Image Pull Secret": "Image Pull Secret",
  "Create a new secret": "Create a new secret",
  "The specified image could require a pull secret credential if it is private. You may choose an existing secret or create a new one": "The specified image could require a pull secret credential if it is private. You may choose an existing secret or create a new one",
  "CPU requirement": "CPU requirement",
  "CPU requirement must be given as a valid number": "CPU requirement must be given as a valid number",
  "CPU requirement must be given as a positive number": "CPU requirement must be given as a positive number",
  "Memory requirement": "Memory requirement",
  "Memory requirement must be given as a valid number": "Memory requirement must be given as a valid number",
  "Memory requirement must be given as a positive number": "Memory requirement must be given as a positive number",
  "You can specify minimum CPU and memory requirements for the container": "You can specify minimum CPU and memory requirements for the container",
  "Run command": "Run command",
  "Run command arguments": "Run command arguments",
  "By default, your containers run the selected image's default entrypoint command. You can use the command options to override the default": "By default, your containers run the selected image's default entrypoint command. You can use the command options to override the default",
  "Run as privileged": "Run as privileged",
  "Processes in privileged containers are equivalent to processes running as root on the host": "Processes in privileged containers are equivalent to processes running as root on the host",
  "Environment variables available for use in the container. Values can reference other variables using $(VAR_NAME) syntax": "Environment variables available for use in the container. Values can reference other variables using $(VAR_NAME) syntax",
  "show advanced options": "show advanced options",
  "hide advanced options": "hide advanced options",

  // src/app/frontend/deploy/deploylabel.html
  "is not unique": "is not unique",
  "delete": "delete",

  // src/app/frontend/deploy/environmentvariables.html
  "Environment variables": "Environment variables",
  "Variable name must be a valid C identifier": "Variable name must be a valid C identifier",
  "Name": "Name",

  // src/app/frontend/deploy/portmappings.html
  "Port": "Port",
  "Port must be an integer": "Port must be an integer",
  "Port must greater than 0": "Port must greater than 0",
  "Port must less than 65536": "Port must less than 65536",
  "Target port": "Target port",
  "Target port must be an integer": "Target port must be an integer",
  "Target port must greater than 0": "Target port must greater than 0",
  "Target port must less than 65536": "Target port must less than 65536",
  "Protocol": "Protocol",
  "Protocol is required": "Protocol is required",
  "Invalid protocol": "Invalid protocol",

  // src/app/frontend/deploy/upload.html
  "YAML or JSON file": "YAML or JSON file",
  "File is required": "File is required",
  "Select a YAML or JSON file, specifying the resources to deploy": "Select a YAML or JSON file, specifying the resources to deploy",

  // src/app/frontend/replicationcontrollerdetail/deletereplicationcontroller.html
  "Delete Replication Controller": "Delete Replication Controller",
  "Delete related services": "Delete related services",
  "Services with label selector matching only this replication controller will be deleted": "Services with label selector matching only this replication controller will be deleted",
  "in namespace": "in namespace",
  "Pods managed by the replication controller will be also deleted": "Pods managed by the replication controller will be also deleted",

  // src/app/frontend/replicationcontrollerdetail/replicationcontrollerinfo.html
  "DELETE REPLICATION CONTROLLER": "DELETE REPLICATION CONTROLLER",
  "Pods status": "Pods status",
  "Label selector": "Label selector",
  "Images": "Images",

  // src/app/frontend/replicationcontrollerdetail/replicationcontrollerdetail.html
  "Type": "Type",
  "No events were found": "No events were found",
  "There are no events to display. It's possible that all of them have expired": "There are no events to display. It's possible that all of them have expired",

  "Logs from the pod": "Logs from the pod",
  "Name of the node the pod is running on": "Name of the node the pod is running on",
  "IP adress of the pod in the cluster": "IP adress of the pod in the cluster",
  "CPU used by the pod": "CPU used by the pod",
  "Memory used by the pod": "Memory used by the pod",
  "Time the pod was last started": "Time the pod was last started",
  "Number of restarts and last restart time of the pod": "Number of restarts and last restart time of the pod",
  "Status of the pod": "Status of the pod",
  "View": "View",

  // src/app/frontend/logs/logstoolbar/logstoolbar.html
  "Logs from pod": "Logs from pod"

};