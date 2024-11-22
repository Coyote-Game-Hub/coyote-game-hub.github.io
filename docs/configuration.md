# 配置文件

配置位于程序根目录下，文件名：`config.yaml`。

## 默认配置文件

### 本机使用

```yaml
port: 8920                      # 服务器端口
host: "0.0.0.0"                 # 监听地址
pulseConfigPath: "pulse.yaml"   # 波形配置文件路径
openBrowser: true               # 启动完成后自动打开浏览器
allowBroadcastToClients: true   # 允许向所有已连接的客户端广播消息
```

### 搭建服务器时使用

```yaml
# 使用服务器搭建服务时的样例配置文件
port: 8920                                  # 服务端口
host: "0.0.0.0"                             # 监听IP地址
reverseProxy: true                          # 是否使用反向代理，开启后会使用反向代理给出的客户端IP地址
webBaseUrl: "https://www.example.com"       # 作为服务部署时，配置控制台的Base URL，格式：http://www.example.com:1234或https://www.example.com
webWsBaseUrl: "wss://ws.example.com"        # 网页控制台的WebSocket Base URL，需要包含协议类型
clientWsBaseUrl: "wss://ws.example.com"     # 客户端连接的WebSocket Base URL，需要包含协议类型
pulseConfigPath: "pulse.yaml"               # 波形配置文件路径
allowBroadcastToClients: false              # 允许向所有已连接的客户端广播消息（搭建公开服务时必须关闭）
hideWebUpdateNotification: true             # 隐藏网页控制台的更新提示
siteNotifications:                          # 站点通知
  - title: "欢迎使用CoyoteGameHub"
    message: "这是一个示例站点通知，你可以在配置文件中添加自己的通知，或者删除这个通知。"
    ignoreId: 'site-welcome-1'             # 忽略ID，用户可以点击“忽略”按钮来忽略这个通知，忽略的通知将不再显示。建议每次更新通知时更改这个ID。
```

## 配置项

```typescript
type MainConfigType = {
    port: number;
    host: string;
    /** 是否使用反向代理，开启后会使用反向代理的配置 */
    reverseProxy?: boolean;
    /** 作为服务部署时，配置控制台的Base URL，格式：http://www.example.com:1234或https://www.example.com */
    webBaseUrl?: string;
    /** 网页控制台的WebSocket Base URL，需要包含协议类型 */
    webWsBaseUrl?: string | null;
    /** DG-Lab客户端连接时的WebSocket URL */
    clientWsBaseUrl?: string | null;
    /** API的基础URL，不需要“api”，末尾需要“/”，某些游戏插件可能不支持HTTPS，需要配置HTTP接口 */
    apiBaseHttpUrl?: string;
    /** 波形配置文件路径 */
    pulseConfigPath: string;
    /** 服务器启动后自动打开浏览器 */
    openBrowser?: boolean;
    /** 允许插件API向所有客户端发送指令 */
    allowBroadcastToClients?: boolean;
    /** 网页不显示更新通知 */
    hideWebUpdateNotification?: boolean;
    /** 站点通知 */
    siteNotifications?: RemoteNotificationInfo[];
}

type RemoteNotificationInfo = {
    /** 通知标题 */
    title?: string;
    /** 通知内容 */
    message: string;
    /** 通知图标，需要是PrimeVue图标列表里的className */
    icon?: string;
    /** 通知类型 */
    severity?: 'success' | 'info' | 'warn' | 'error' | 'secondary' | 'contrast';
    /** 通知的ID，如果存在则此通知可以忽略 */
    ignoreId?: string;
    /** 阻止通知自动关闭 */
    sticky?: boolean;
    /** 点击通知后打开的URL */
    url?: string;
    /** 打开URL的按钮文本 */
    urlLabel?: string;
}
```

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file
