// https://www.terraform.io/docs/providers/kubernetes/d/ingress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesIngressConfig extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress#metadata DataKubernetesIngress#metadata}
  */
  readonly metadata: DataKubernetesIngressMetadata;
}
export class DataKubernetesIngressSpecBackend extends cdktf.ComplexComputedList {

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPathBackend extends cdktf.ComplexComputedList {

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getStringAttribute('service_port');
  }
}
export class DataKubernetesIngressSpecRuleHttpPath extends cdktf.ComplexComputedList {

  // backend - computed: true, optional: false, required: false
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesIngressSpecRuleHttp extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('path');
  }
}
export class DataKubernetesIngressSpecRule extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http - computed: true, optional: false, required: false
  public get http() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http');
  }
}
export class DataKubernetesIngressSpecTls extends cdktf.ComplexComputedList {

  // hosts - computed: true, optional: false, required: false
  public get hosts() {
    return this.getListAttribute('hosts');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesIngressSpec extends cdktf.ComplexComputedList {

  // backend - computed: true, optional: false, required: false
  public get backend() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backend');
  }

  // ingress_class_name - computed: true, optional: false, required: false
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }

  // rule - computed: true, optional: false, required: false
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule');
  }

  // tls - computed: true, optional: false, required: false
  public get tls() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tls');
  }
}
export class DataKubernetesIngressStatusLoadBalancerIngress extends cdktf.ComplexComputedList {

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesIngressStatusLoadBalancer extends cdktf.ComplexComputedList {

  // ingress - computed: true, optional: false, required: false
  public get ingress() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ingress');
  }
}
export class DataKubernetesIngressStatus extends cdktf.ComplexComputedList {

  // load_balancer - computed: true, optional: false, required: false
  public get loadBalancer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('load_balancer');
  }
}
export interface DataKubernetesIngressMetadata {
  /**
  * An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress#annotations DataKubernetesIngress#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress#labels DataKubernetesIngress#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the ingress, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress#name DataKubernetesIngress#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the ingress must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress#namespace DataKubernetesIngress#namespace}
  */
  readonly namespace?: string;
}

export function dataKubernetesIngressMetadataToTerraform(struct?: DataKubernetesIngressMetadataOutputReference | DataKubernetesIngressMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesIngressMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataKubernetesIngressMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKubernetesIngressMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getNumberAttribute('generation');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress kubernetes_ingress}
*/
export class DataKubernetesIngress extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_ingress";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/ingress kubernetes_ingress} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesIngressConfig
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesIngressConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_ingress',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata.internalValue = config.metadata;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // spec - computed: true, optional: false, required: false
  public spec(index: string) {
    return new DataKubernetesIngressSpec(this, 'spec', index, false);
  }

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new DataKubernetesIngressStatus(this, 'status', index, false);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataKubernetesIngressMetadataOutputReference(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataKubernetesIngressMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataKubernetesIngressMetadataToTerraform(this._metadata.internalValue),
    };
  }
}
