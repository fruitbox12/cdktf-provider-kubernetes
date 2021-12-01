// https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MutatingWebhookConfigurationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#metadata MutatingWebhookConfigurationV1#metadata}
  */
  readonly metadata: MutatingWebhookConfigurationV1Metadata;
  /**
  * webhook block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#webhook MutatingWebhookConfigurationV1#webhook}
  */
  readonly webhook: MutatingWebhookConfigurationV1Webhook[];
}
export interface MutatingWebhookConfigurationV1Metadata {
  /**
  * An unstructured key value map stored with the mutating webhook configuration that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#annotations MutatingWebhookConfigurationV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#generate_name MutatingWebhookConfigurationV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the mutating webhook configuration. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#labels MutatingWebhookConfigurationV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the mutating webhook configuration, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#name MutatingWebhookConfigurationV1#name}
  */
  readonly name?: string;
}

function mutatingWebhookConfigurationV1MetadataToTerraform(struct?: MutatingWebhookConfigurationV1MetadataOutputReference | MutatingWebhookConfigurationV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class MutatingWebhookConfigurationV1MetadataOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get annotations() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('annotations') as any;
  }
  public set annotations(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations
  }

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string | undefined; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string | undefined) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: true, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface MutatingWebhookConfigurationV1WebhookClientConfigService {
  /**
  * `name` is the name of the service. Required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#name MutatingWebhookConfigurationV1#name}
  */
  readonly name: string;
  /**
  * `namespace` is the namespace of the service. Required
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#namespace MutatingWebhookConfigurationV1#namespace}
  */
  readonly namespace: string;
  /**
  * `path` is an optional URL path which will be sent in any request to this service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#path MutatingWebhookConfigurationV1#path}
  */
  readonly path?: string;
  /**
  * If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#port MutatingWebhookConfigurationV1#port}
  */
  readonly port?: number;
}

function mutatingWebhookConfigurationV1WebhookClientConfigServiceToTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference | MutatingWebhookConfigurationV1WebhookClientConfigService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // port - computed: false, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }
}
export interface MutatingWebhookConfigurationV1WebhookClientConfig {
  /**
  * `caBundle` is a PEM encoded CA bundle which will be used to validate the webhook's server certificate. If unspecified, system trust roots on the apiserver are used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#ca_bundle MutatingWebhookConfigurationV1#ca_bundle}
  */
  readonly caBundle?: string;
  /**
  * `url` gives the location of the webhook, in standard URL form (`scheme://host:port/path`). Exactly one of `url` or `service` must be specified.

The `host` should not refer to a service running in the cluster; use the `service` field instead. The host might be resolved via external DNS in some apiservers (e.g., `kube-apiserver` cannot resolve in-cluster DNS as that would be a layering violation). `host` may also be an IP address.

Please note that using `localhost` or `127.0.0.1` as a `host` is risky unless you take great care to run this webhook on all hosts which run an apiserver which might need to make calls to this webhook. Such installs are likely to be non-portable, i.e., not easy to turn up in a new cluster.

The scheme must be "https"; the URL must begin with "https://".

A path is optional, and if present may be any string permissible in a URL. You may use the path to pass an arbitrary string to the webhook, for example, a cluster identifier.

Attempting to use a user or basic auth e.g. "user:password@" is not allowed. Fragments ("#...") and query parameters ("?...") are not allowed, either.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#url MutatingWebhookConfigurationV1#url}
  */
  readonly url?: string;
  /**
  * service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#service MutatingWebhookConfigurationV1#service}
  */
  readonly service?: MutatingWebhookConfigurationV1WebhookClientConfigService;
}

function mutatingWebhookConfigurationV1WebhookClientConfigToTerraform(struct?: MutatingWebhookConfigurationV1WebhookClientConfigOutputReference | MutatingWebhookConfigurationV1WebhookClientConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_bundle: cdktf.stringToTerraform(struct!.caBundle),
    url: cdktf.stringToTerraform(struct!.url),
    service: mutatingWebhookConfigurationV1WebhookClientConfigServiceToTerraform(struct!.service),
  }
}

export class MutatingWebhookConfigurationV1WebhookClientConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ca_bundle - computed: false, optional: true, required: false
  private _caBundle?: string | undefined; 
  public get caBundle() {
    return this.getStringAttribute('ca_bundle');
  }
  public set caBundle(value: string | undefined) {
    this._caBundle = value;
  }
  public resetCaBundle() {
    this._caBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caBundleInput() {
    return this._caBundle
  }

  // url - computed: false, optional: true, required: false
  private _url?: string | undefined; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }

  // service - computed: false, optional: true, required: false
  private _service?: MutatingWebhookConfigurationV1WebhookClientConfigService | undefined; 
  private __serviceOutput = new MutatingWebhookConfigurationV1WebhookClientConfigServiceOutputReference(this as any, "service", true);
  public get service() {
    return this.__serviceOutput;
  }
  public putService(value: MutatingWebhookConfigurationV1WebhookClientConfigService | undefined) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }
}
export interface MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#key MutatingWebhookConfigurationV1#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#operator MutatingWebhookConfigurationV1#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#values MutatingWebhookConfigurationV1#values}
  */
  readonly values?: string[];
}

function mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MutatingWebhookConfigurationV1WebhookNamespaceSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#match_labels MutatingWebhookConfigurationV1#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#match_expressions MutatingWebhookConfigurationV1#match_expressions}
  */
  readonly matchExpressions?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[];
}

function mutatingWebhookConfigurationV1WebhookNamespaceSelectorToTerraform(struct?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference | MutatingWebhookConfigurationV1WebhookNamespaceSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class MutatingWebhookConfigurationV1WebhookNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: MutatingWebhookConfigurationV1WebhookNamespaceSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#key MutatingWebhookConfigurationV1#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#operator MutatingWebhookConfigurationV1#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#values MutatingWebhookConfigurationV1#values}
  */
  readonly values?: string[];
}

function mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface MutatingWebhookConfigurationV1WebhookObjectSelector {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#match_labels MutatingWebhookConfigurationV1#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#match_expressions MutatingWebhookConfigurationV1#match_expressions}
  */
  readonly matchExpressions?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[];
}

function mutatingWebhookConfigurationV1WebhookObjectSelectorToTerraform(struct?: MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference | MutatingWebhookConfigurationV1WebhookObjectSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export class MutatingWebhookConfigurationV1WebhookObjectSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get matchLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_labels') as any;
  }
  public set matchLabels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions?: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[] | undefined; 
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions') as any;
  }
  public set matchExpressions(value: MutatingWebhookConfigurationV1WebhookObjectSelectorMatchExpressions[] | undefined) {
    this._matchExpressions = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions
  }
}
export interface MutatingWebhookConfigurationV1WebhookRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#api_groups MutatingWebhookConfigurationV1#api_groups}
  */
  readonly apiGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#api_versions MutatingWebhookConfigurationV1#api_versions}
  */
  readonly apiVersions: string[];
  /**
  * Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If '*' is present, the length of the slice must be one. Required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#operations MutatingWebhookConfigurationV1#operations}
  */
  readonly operations: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#resources MutatingWebhookConfigurationV1#resources}
  */
  readonly resources: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#scope MutatingWebhookConfigurationV1#scope}
  */
  readonly scope?: string;
}

function mutatingWebhookConfigurationV1WebhookRuleToTerraform(struct?: MutatingWebhookConfigurationV1WebhookRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiGroups),
    api_versions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiVersions),
    operations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.operations),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface MutatingWebhookConfigurationV1Webhook {
  /**
  * AdmissionReviewVersions is an ordered list of preferred `AdmissionReview` versions the Webhook expects. API server will try to use first version in the list which it supports. If none of the versions specified in this list supported by API server, validation will fail for this object. If a persisted webhook configuration specifies allowed versions and does not include any versions known to the API Server, calls to the webhook will fail and be subject to the failure policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#admission_review_versions MutatingWebhookConfigurationV1#admission_review_versions}
  */
  readonly admissionReviewVersions?: string[];
  /**
  * FailurePolicy defines how unrecognized errors from the admission endpoint are handled - allowed values are Ignore or Fail. Defaults to Fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#failure_policy MutatingWebhookConfigurationV1#failure_policy}
  */
  readonly failurePolicy?: string;
  /**
  * matchPolicy defines how the "rules" list is used to match incoming requests. Allowed values are "Exact" or "Equivalent".

- Exact: match a request only if it exactly matches a specified rule. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, but "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would not be sent to the webhook.

- Equivalent: match a request if modifies a resource listed in rules, even via another API group or version. For example, if deployments can be modified via apps/v1, apps/v1beta1, and extensions/v1beta1, and "rules" only included `apiGroups:["apps"], apiVersions:["v1"], resources: ["deployments"]`, a request to apps/v1beta1 or extensions/v1beta1 would be converted to apps/v1 and sent to the webhook.

Defaults to "Equivalent"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#match_policy MutatingWebhookConfigurationV1#match_policy}
  */
  readonly matchPolicy?: string;
  /**
  * The name of the admission webhook. Name should be fully qualified, e.g., imagepolicy.kubernetes.io, where "imagepolicy" is the name of the webhook, and kubernetes.io is the name of the organization. Required.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#name MutatingWebhookConfigurationV1#name}
  */
  readonly name: string;
  /**
  * reinvocationPolicy indicates whether this webhook should be called multiple times as part of a single admission evaluation. Allowed values are "Never" and "IfNeeded".

Never: the webhook will not be called more than once in a single admission evaluation.

IfNeeded: the webhook will be called at least one additional time as part of the admission evaluation if the object being admitted is modified by other admission plugins after the initial webhook call. Webhooks that specify this option *must* be idempotent, able to process objects they previously admitted. Note: * the number of additional invocations is not guaranteed to be exactly one. * if additional invocations result in further modifications to the object, webhooks are not guaranteed to be invoked again. * webhooks that use this option may be reordered to minimize the number of additional invocations. * to validate an object after all mutations are guaranteed complete, use a validating admission webhook instead.

Defaults to "Never".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#reinvocation_policy MutatingWebhookConfigurationV1#reinvocation_policy}
  */
  readonly reinvocationPolicy?: string;
  /**
  * SideEffects states whether this webhook has side effects. Acceptable values are: None, NoneOnDryRun (webhooks created via v1beta1 may also specify Some or Unknown). Webhooks with side effects MUST implement a reconciliation system, since a request may be rejected by a future step in the admission chain and the side effects therefore need to be undone. Requests with the dryRun attribute will be auto-rejected if they match a webhook with sideEffects == Unknown or Some.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#side_effects MutatingWebhookConfigurationV1#side_effects}
  */
  readonly sideEffects?: string;
  /**
  * TimeoutSeconds specifies the timeout for this webhook. After the timeout passes, the webhook call will be ignored or the API call will fail based on the failure policy. The timeout value must be between 1 and 30 seconds. Default to 10 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#timeout_seconds MutatingWebhookConfigurationV1#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * client_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#client_config MutatingWebhookConfigurationV1#client_config}
  */
  readonly clientConfig: MutatingWebhookConfigurationV1WebhookClientConfig;
  /**
  * namespace_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#namespace_selector MutatingWebhookConfigurationV1#namespace_selector}
  */
  readonly namespaceSelector?: MutatingWebhookConfigurationV1WebhookNamespaceSelector;
  /**
  * object_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#object_selector MutatingWebhookConfigurationV1#object_selector}
  */
  readonly objectSelector?: MutatingWebhookConfigurationV1WebhookObjectSelector;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html#rule MutatingWebhookConfigurationV1#rule}
  */
  readonly rule: MutatingWebhookConfigurationV1WebhookRule[];
}

function mutatingWebhookConfigurationV1WebhookToTerraform(struct?: MutatingWebhookConfigurationV1Webhook): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_review_versions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.admissionReviewVersions),
    failure_policy: cdktf.stringToTerraform(struct!.failurePolicy),
    match_policy: cdktf.stringToTerraform(struct!.matchPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    reinvocation_policy: cdktf.stringToTerraform(struct!.reinvocationPolicy),
    side_effects: cdktf.stringToTerraform(struct!.sideEffects),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    client_config: mutatingWebhookConfigurationV1WebhookClientConfigToTerraform(struct!.clientConfig),
    namespace_selector: mutatingWebhookConfigurationV1WebhookNamespaceSelectorToTerraform(struct!.namespaceSelector),
    object_selector: mutatingWebhookConfigurationV1WebhookObjectSelectorToTerraform(struct!.objectSelector),
    rule: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookRuleToTerraform)(struct!.rule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html kubernetes_mutating_webhook_configuration_v1}
*/
export class MutatingWebhookConfigurationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_mutating_webhook_configuration_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/mutating_webhook_configuration_v1.html kubernetes_mutating_webhook_configuration_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MutatingWebhookConfigurationV1Config
  */
  public constructor(scope: Construct, id: string, config: MutatingWebhookConfigurationV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_mutating_webhook_configuration_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._webhook = config.webhook;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: MutatingWebhookConfigurationV1Metadata; 
  private __metadataOutput = new MutatingWebhookConfigurationV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: MutatingWebhookConfigurationV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // webhook - computed: false, optional: false, required: true
  private _webhook?: MutatingWebhookConfigurationV1Webhook[]; 
  public get webhook() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('webhook') as any;
  }
  public set webhook(value: MutatingWebhookConfigurationV1Webhook[]) {
    this._webhook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: mutatingWebhookConfigurationV1MetadataToTerraform(this._metadata),
      webhook: cdktf.listMapper(mutatingWebhookConfigurationV1WebhookToTerraform)(this._webhook),
    };
  }
}
