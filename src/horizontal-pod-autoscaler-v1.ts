// https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HorizontalPodAutoscalerV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#metadata HorizontalPodAutoscalerV1#metadata}
  */
  readonly metadata: HorizontalPodAutoscalerV1Metadata;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#spec HorizontalPodAutoscalerV1#spec}
  */
  readonly spec: HorizontalPodAutoscalerV1Spec;
}
export interface HorizontalPodAutoscalerV1Metadata {
  /**
  * An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#annotations HorizontalPodAutoscalerV1#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#generate_name HorizontalPodAutoscalerV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#labels HorizontalPodAutoscalerV1#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#name HorizontalPodAutoscalerV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the horizontal pod autoscaler must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#namespace HorizontalPodAutoscalerV1#namespace}
  */
  readonly namespace?: string;
}

function horizontalPodAutoscalerV1MetadataToTerraform(struct?: HorizontalPodAutoscalerV1MetadataOutputReference | HorizontalPodAutoscalerV1Metadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class HorizontalPodAutoscalerV1MetadataOutputReference extends cdktf.ComplexObject {
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface HorizontalPodAutoscalerV1SpecScaleTargetRef {
  /**
  * API version of the referent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#api_version HorizontalPodAutoscalerV1#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#kind HorizontalPodAutoscalerV1#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#name HorizontalPodAutoscalerV1#name}
  */
  readonly name: string;
}

function horizontalPodAutoscalerV1SpecScaleTargetRefToTerraform(struct?: HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference | HorizontalPodAutoscalerV1SpecScaleTargetRef): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string | undefined; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string | undefined) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
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
}
export interface HorizontalPodAutoscalerV1Spec {
  /**
  * Upper limit for the number of pods that can be set by the autoscaler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#max_replicas HorizontalPodAutoscalerV1#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#min_replicas HorizontalPodAutoscalerV1#min_replicas}
  */
  readonly minReplicas?: number;
  /**
  * Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. If not specified the default autoscaling policy will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#target_cpu_utilization_percentage HorizontalPodAutoscalerV1#target_cpu_utilization_percentage}
  */
  readonly targetCpuUtilizationPercentage?: number;
  /**
  * scale_target_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html#scale_target_ref HorizontalPodAutoscalerV1#scale_target_ref}
  */
  readonly scaleTargetRef: HorizontalPodAutoscalerV1SpecScaleTargetRef;
}

function horizontalPodAutoscalerV1SpecToTerraform(struct?: HorizontalPodAutoscalerV1SpecOutputReference | HorizontalPodAutoscalerV1Spec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    target_cpu_utilization_percentage: cdktf.numberToTerraform(struct!.targetCpuUtilizationPercentage),
    scale_target_ref: horizontalPodAutoscalerV1SpecScaleTargetRefToTerraform(struct!.scaleTargetRef),
  }
}

export class HorizontalPodAutoscalerV1SpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas
  }

  // min_replicas - computed: false, optional: true, required: false
  private _minReplicas?: number | undefined; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number | undefined) {
    this._minReplicas = value;
  }
  public resetMinReplicas() {
    this._minReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas
  }

  // target_cpu_utilization_percentage - computed: true, optional: true, required: false
  private _targetCpuUtilizationPercentage?: number | undefined; 
  public get targetCpuUtilizationPercentage() {
    return this.getNumberAttribute('target_cpu_utilization_percentage');
  }
  public set targetCpuUtilizationPercentage(value: number | undefined) {
    this._targetCpuUtilizationPercentage = value;
  }
  public resetTargetCpuUtilizationPercentage() {
    this._targetCpuUtilizationPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCpuUtilizationPercentageInput() {
    return this._targetCpuUtilizationPercentage
  }

  // scale_target_ref - computed: false, optional: false, required: true
  private _scaleTargetRef?: HorizontalPodAutoscalerV1SpecScaleTargetRef; 
  private __scaleTargetRefOutput = new HorizontalPodAutoscalerV1SpecScaleTargetRefOutputReference(this as any, "scale_target_ref", true);
  public get scaleTargetRef() {
    return this.__scaleTargetRefOutput;
  }
  public putScaleTargetRef(value: HorizontalPodAutoscalerV1SpecScaleTargetRef) {
    this._scaleTargetRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTargetRefInput() {
    return this._scaleTargetRef
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html kubernetes_horizontal_pod_autoscaler_v1}
*/
export class HorizontalPodAutoscalerV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_horizontal_pod_autoscaler_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v1.html kubernetes_horizontal_pod_autoscaler_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HorizontalPodAutoscalerV1Config
  */
  public constructor(scope: Construct, id: string, config: HorizontalPodAutoscalerV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_horizontal_pod_autoscaler_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._metadata = config.metadata;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: HorizontalPodAutoscalerV1Metadata; 
  private __metadataOutput = new HorizontalPodAutoscalerV1MetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: HorizontalPodAutoscalerV1Metadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec?: HorizontalPodAutoscalerV1Spec; 
  private __specOutput = new HorizontalPodAutoscalerV1SpecOutputReference(this as any, "spec", true);
  public get spec() {
    return this.__specOutput;
  }
  public putSpec(value: HorizontalPodAutoscalerV1Spec) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: horizontalPodAutoscalerV1MetadataToTerraform(this._metadata),
      spec: horizontalPodAutoscalerV1SpecToTerraform(this._spec),
    };
  }
}