// https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * aggregation_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#aggregation_rule ClusterRole#aggregation_rule}
  */
  readonly aggregationRule?: ClusterRoleAggregationRule;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#metadata ClusterRole#metadata}
  */
  readonly metadata: ClusterRoleMetadata;
  /**
  * rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#rule ClusterRole#rule}
  */
  readonly rule?: ClusterRoleRule[];
}
export interface ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions {
  /**
  * The label key that the selector applies to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#key ClusterRole#key}
  */
  readonly key?: string;
  /**
  * A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#operator ClusterRole#operator}
  */
  readonly operator?: string;
  /**
  * An array of string values. If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#values ClusterRole#values}
  */
  readonly values?: string[];
}

function clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsToTerraform(struct?: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions): any {
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

export interface ClusterRoleAggregationRuleClusterRoleSelectors {
  /**
  * A map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#match_labels ClusterRole#match_labels}
  */
  readonly matchLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * match_expressions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#match_expressions ClusterRole#match_expressions}
  */
  readonly matchExpressions?: ClusterRoleAggregationRuleClusterRoleSelectorsMatchExpressions[];
}

function clusterRoleAggregationRuleClusterRoleSelectorsToTerraform(struct?: ClusterRoleAggregationRuleClusterRoleSelectors): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsMatchExpressionsToTerraform)(struct!.matchExpressions),
  }
}

export interface ClusterRoleAggregationRule {
  /**
  * cluster_role_selectors block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#cluster_role_selectors ClusterRole#cluster_role_selectors}
  */
  readonly clusterRoleSelectors?: ClusterRoleAggregationRuleClusterRoleSelectors[];
}

function clusterRoleAggregationRuleToTerraform(struct?: ClusterRoleAggregationRuleOutputReference | ClusterRoleAggregationRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_role_selectors: cdktf.listMapper(clusterRoleAggregationRuleClusterRoleSelectorsToTerraform)(struct!.clusterRoleSelectors),
  }
}

export class ClusterRoleAggregationRuleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cluster_role_selectors - computed: false, optional: true, required: false
  private _clusterRoleSelectors?: ClusterRoleAggregationRuleClusterRoleSelectors[] | undefined; 
  public get clusterRoleSelectors() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_role_selectors') as any;
  }
  public set clusterRoleSelectors(value: ClusterRoleAggregationRuleClusterRoleSelectors[] | undefined) {
    this._clusterRoleSelectors = value;
  }
  public resetClusterRoleSelectors() {
    this._clusterRoleSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRoleSelectorsInput() {
    return this._clusterRoleSelectors
  }
}
export interface ClusterRoleMetadata {
  /**
  * An unstructured key value map stored with the clusterRole that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#annotations ClusterRole#annotations}
  */
  readonly annotations?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the clusterRole. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#labels ClusterRole#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the clusterRole, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#name ClusterRole#name}
  */
  readonly name?: string;
}

function clusterRoleMetadataToTerraform(struct?: ClusterRoleMetadataOutputReference | ClusterRoleMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class ClusterRoleMetadataOutputReference extends cdktf.ComplexObject {
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
export interface ClusterRoleRule {
  /**
  * APIGroups is the name of the APIGroup that contains the resources. If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#api_groups ClusterRole#api_groups}
  */
  readonly apiGroups?: string[];
  /**
  * NonResourceURLs is a set of partial urls that a user should have access to. *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as "pods" or "secrets") or non-resource URL paths (such as "/api"), but not both.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#non_resource_urls ClusterRole#non_resource_urls}
  */
  readonly nonResourceUrls?: string[];
  /**
  * ResourceNames is an optional white list of names that the rule applies to. An empty set means that everything is allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#resource_names ClusterRole#resource_names}
  */
  readonly resourceNames?: string[];
  /**
  * Resources is a list of resources this rule applies to. ResourceAll represents all resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#resources ClusterRole#resources}
  */
  readonly resources?: string[];
  /**
  * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule. VerbAll represents all kinds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html#verbs ClusterRole#verbs}
  */
  readonly verbs: string[];
}

function clusterRoleRuleToTerraform(struct?: ClusterRoleRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.apiGroups),
    non_resource_urls: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nonResourceUrls),
    resource_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceNames),
    resources: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resources),
    verbs: cdktf.listMapper(cdktf.stringToTerraform)(struct!.verbs),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html kubernetes_cluster_role}
*/
export class ClusterRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_cluster_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/r/cluster_role.html kubernetes_cluster_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ClusterRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_cluster_role',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._aggregationRule = config.aggregationRule;
    this._metadata = config.metadata;
    this._rule = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // aggregation_rule - computed: false, optional: true, required: false
  private _aggregationRule?: ClusterRoleAggregationRule | undefined; 
  private __aggregationRuleOutput = new ClusterRoleAggregationRuleOutputReference(this as any, "aggregation_rule", true);
  public get aggregationRule() {
    return this.__aggregationRuleOutput;
  }
  public putAggregationRule(value: ClusterRoleAggregationRule | undefined) {
    this._aggregationRule = value;
  }
  public resetAggregationRule() {
    this._aggregationRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationRuleInput() {
    return this._aggregationRule
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata?: ClusterRoleMetadata; 
  private __metadataOutput = new ClusterRoleMetadataOutputReference(this as any, "metadata", true);
  public get metadata() {
    return this.__metadataOutput;
  }
  public putMetadata(value: ClusterRoleMetadata) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: ClusterRoleRule[] | undefined; 
  public get rule() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: ClusterRoleRule[] | undefined) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation_rule: clusterRoleAggregationRuleToTerraform(this._aggregationRule),
      metadata: clusterRoleMetadataToTerraform(this._metadata),
      rule: cdktf.listMapper(clusterRoleRuleToTerraform)(this._rule),
    };
  }
}
