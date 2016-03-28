export default {

  // common
  "OK": "确定",
  "Cancel": "取消",
  "Name is required": "名称必填",
  "Learn more": "更多",

  // src/app/frontend/replicationcontrollerlist/replicationcontrollercard.html
  "One or more pods have errors": "1个或者多个pods存在错误",
  "One or more pods are in pending state": "1个或者多个pods处于挂起状态",
  "pending": "挂起",
  "running": "运行",
  "failed": "失败",
  "desired": "期望",
  "Description": "描述",
  "Image": "镜像",
  "Age": "距上次运行时间",
  "Internal endpoint": "内部入口",
  "External endpoint": "外部入口",
  "none": "无",
  "Created at": "创建于",

  // src/app/frontend/replicationcontrollerlist/replicationcontrollercardmenu.html
  "View details": "查看详情",
  "Edit pod count": "编辑pod数量",
  "Delete": "删除",

  // src/app/frontend/replicationcontrollerlist/logsmenu.html
  "Logs": "查看日志",
  "Log": "日志",
  "Pod": "Pod名称",
  "Running since": "起始运行时间",
  "Not running": "没有运行",

  // src/app/frontend/replicationcontrollerdetail/updatereplicas.html
  "Set desired number of pods": "设置需要的pods数量",
  "will be updated to reflect the desired count": "将会被更新来反应设置的pods数量",
  "Current status": "当前状态",
  "created": "已创建",
  "Number of pods": "pods数量",

  // src/app/frontend/deploy/createnamespace.html
  "Create a new namespace": "创建新的名称空间",
  "The new namespace will be added to the cluster": "新的名称空间将会被添加到集群中",
  "Namespace name": "名称空间名字",
  "Name must be alphanumeric and may contain dashes": "名称必须是字母, 可以包含破折号",
  "Name is too long": "名称太长",

  // src/app/frontend/deploy/createsecret.html
  "Create a new image pull secret": "创建新的拉取凭证",
  "Secret name": "凭证名称",
  "Name must follow the DNS domain name syntax <br>(e.g. new.image-pull.secret)": "名称必须符合DNS域名语法. <br>(e.g. new.image-pull.secret)<",
  "Name length cannot exceed": "名称不能超过",
  "characters": "字符",
  "A secret with the specified name will be added to the cluster in the namespace": "一个指定名称的凭证将会被添加到集群中, 这个集群属于名称空间",
  "Image pull secret data": "镜像拉取凭证数据",
  "Data is required": "数据是必填的",
  "Data must be Base64 encoded": "数据必须是Base64编码",
  "Specify the data for your secret to hold. The value is the Base64 encoded content of a .dockercfg file": "保留你的凭证数据. 这个值是.dockercfg文件的一个Base64编码值",
  "Create": "创建",

  // src/app/frontend/deploy/deploy.html
  "Deploy a Containerized App": "部署容器化App",
  "Specify app details below": "在下面指定app详情",
  "Upload a YAML or JSON file": "上传YAML或者JSON文件",
  "Deploy": "部署",

  // src/app/frontend/deploy/deployfromsettings.html
  "App name": "App名称",
  "Application name is required": "Application名称必填",
  "Application with this name already exists within namespace": "该Application名称已经存在于名称空间",
  "Application name should contain only lowercase letters, numbers, and '-' between words": "Application名称只能包含小写字母, 数组, 中划线'-'",
  "Application name should have no more than 63 characters": "Application名称不能超过63个字符",
  "An 'app' label with this value will be added to the Replication Controller and Service that get deployed": "App名称的值将会被添加到Replication Controller和Service中",
  "Container image": "容器镜像",
  "Container image is required": "容器镜像必填",
  "Enter the URL of a public image on any registry, or a private image hosted on Docker Hub or Google Container Registry": "输入公共镜像或者任何一个私有仓库, 或者脱管在Docker Hub or Google Container Registry上的私有镜像的URL",
  "Number of pods is required": "pods数量必填",
  "Number of pods must be a positive integer": "pods数量必须是整数",
  "Number of pods must be at least 1": "pods数量至少1个",
  "A Replication Controller will be created to maintain the desired number of pods across your cluster": "一个Replication Controller将会被创建来维持你的集群中指定的pods的数量",
  "Ports are optional. If specified, a Service will be created mapping the Port (incoming) to a target Port seen by the container": "端口是可选的. 如果指定了, 一个Service将会被创建来映射容器暴露出的端口",
  "The internal DNS name for this Service will be": "这个Service针对的内部DNS名称是",
  "Expose service externally": "是否暴露为外部服务",
  "The description will be added as an annotation to the Replication Controller and displayed in the application's details": "这个描述信息将会作为Replication Controller的注释信息并被展示在App的详情中",
  "Labels": "标签",
  "Key": "键",
  "Value": "值",
  "Namespace": "名称空间",
  "Namespaces let you partition resources into logically named groups": "名称空间分隔你的资源逻辑的命名分组中",
  "Image Pull Secret": "镜像拉取凭证",
  "Create a new secret": "创建一个凭证",
  "The specified image could require a pull secret credential if it is private. You may choose an existing secret or create a new one": "私有镜像需要一个拉取凭证. 你可以选择已经的凭证或者新建一个",
  "CPU requirement": "CPU要求",
  "CPU requirement must be given as a valid number": "必须是一个合法的数字",
  "CPU requirement must be given as a positive number": "必须是一个正整数",
  "Memory requirement": "Memory要求",
  "Memory requirement must be given as a valid number": "必须是一个合法的数字",
  "Memory requirement must be given as a positive number": "必须是一个正整数",
  "You can specify minimum CPU and memory requirements for the container": "你可以指定容易运行时的最小CPU和内存需求",
  "Run command": "运行命令",
  "Run command arguments": "运行命令参数",
  "By default, your containers run the selected image's default entrypoint command. You can use the command options to override the default": "默认的, 你的容器运行被选镜像的入口命令. 你可以使用该选项覆盖它",
  "Run as privileged": "使用权限执行",
  "Processes in privileged containers are equivalent to processes running as root on the host": "有权限的容器中的进程等价于宿主机中使用root用户运行的进程",
  "Environment variables available for use in the container. Values can reference other variables using $(VAR_NAME) syntax": "在容器中使用的环境变量, Values可以使用$(VAR_NAME)的语法引用其他变量",
  "show advanced options": "显示高级设置",
  "hide advanced options": "隐藏高级设置",

  // src/app/frontend/deploy/deploylabel.html
  "is not unique": "不唯一",
  "delete": "删除",

  // src/app/frontend/deploy/environmentvariables.html
  "Environment variables": "环境变量",
  "Variable name must be a valid C identifier": "变量必须是一个合法的C标识符",
  "Name": "名称",

  // src/app/frontend/deploy/portmappings.html
  "Port": "端口",
  "Port must be an integer": "端口必须是一个整数",
  "Port must greater than 0": "端口必须大于0",
  "Port must less than 65536": "端口必须小于65536",
  "Target port": "目标端口",
  "Target port must be an integer": "目标端口必须是一个整数",
  "Target port must greater than 0": "目标端口必须大于0",
  "Target port must less than 65536": "目标端口必须小于65536",
  "Protocol": "协议",
  "Protocol is required": "协议必填",
  "Invalid protocol": "非法的协议",

  // src/app/frontend/deploy/upload.html
  "YAML or JSON file": "YAML或者JSON文件",
  "File is required": "上传文件必填",
  "Select a YAML or JSON file, specifying the resources to deploy": "选择一个YAML或者JSON的文件, 指定要部署的资源",

  // src/app/frontend/replicationcontrollerdetail/deletereplicationcontroller.html
  "Delete Replication Controller": "删除 Replication Controller",
  "Delete related services": "删除关联服务",
  "Services with label selector matching only this replication controller will be deleted": "标签选择器匹配这个replication controller的服务将会被删除",
  "in namespace": "属于名称空间",
  "Pods managed by the replication controller will be also deleted": "由replication controller管理的Pods也会被删除",

  // src/app/frontend/replicationcontrollerdetail/replicationcontrollerinfo.html
  "DELETE REPLICATION CONTROLLER": "删除 REPLICATION CONTROLLER",
  "Pods status": "Pods状态",
  "Label selector": "标签选择器",
  "Images": "镜像",

  // src/app/frontend/replicationcontrollerdetail/replicationcontrollerdetail.html
  "Type": "类型",
  "No events were found": "未找到任务事件",
  "There are no events to display. It's possible that all of them have expired": "没有事件可展示, 可能是所有的事件都已经过期",
  "Logs from the pod": "Pods的日志",
  "Name of the node the pod is running on": "Pod运行的结点的名称",
  "IP adress of the pod in the cluster": "在集群中pod的ip地址",
  "CPU used by the pod": "pod使用的CPU数量",
  "Memory used by the pod": "pod使用的内存数量",
  "Time the pod was last started": "自上次启动后的运行时间",
  "Number of restarts and last restart time of the pod": "重启次数和最后一次启动时间",
  "Status of the pod": "pod状态",
  "View": "查看",

  // src/app/frontend/logs/logstoolbar/logstoolbar.html
  "Logs from pod": "日志来源于Pod"

};