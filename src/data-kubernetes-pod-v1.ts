// https://www.terraform.io/docs/providers/kubernetes/d/pod_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKubernetesPodV1Config extends cdktf.TerraformMetaArguments {
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#metadata DataKubernetesPodV1#metadata}
  */
  readonly metadata: DataKubernetesPodV1Metadata;
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // preference - computed: true, optional: false, required: false
  public get preference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preference');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerm extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // node_selector_term - computed: true, optional: false, required: false
  public get nodeSelectorTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_selector_term');
  }
}
export class DataKubernetesPodV1SpecAffinityNodeAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: false
  public get podAffinityTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pod_affinity_term');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // pod_affinity_term - computed: true, optional: false, required: false
  public get podAffinityTerm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pod_affinity_term');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
}
export class DataKubernetesPodV1SpecAffinityPodAntiAffinity extends cdktf.ComplexComputedList {

  // preferred_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('preferred_during_scheduling_ignored_during_execution');
  }

  // required_during_scheduling_ignored_during_execution - computed: true, optional: false, required: false
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('required_during_scheduling_ignored_during_execution');
  }
}
export class DataKubernetesPodV1SpecAffinity extends cdktf.ComplexComputedList {

  // node_affinity - computed: true, optional: false, required: false
  public get nodeAffinity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_affinity');
  }

  // pod_affinity - computed: true, optional: false, required: false
  public get podAffinity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pod_affinity');
  }

  // pod_anti_affinity - computed: true, optional: false, required: false
  public get podAntiAffinity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pod_anti_affinity');
  }
}
export class DataKubernetesPodV1SpecContainerEnvValueFromConfigMapKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecContainerEnvValueFromFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodV1SpecContainerEnvValueFromResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodV1SpecContainerEnvValueFromSecretKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecContainerEnvValueFrom extends cdktf.ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: false
  public get configMapKeyRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map_key_ref');
  }

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field_ref');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_field_ref');
  }

  // secret_key_ref - computed: true, optional: false, required: false
  public get secretKeyRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_key_ref');
  }
}
export class DataKubernetesPodV1SpecContainerEnv extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_from');
  }
}
export class DataKubernetesPodV1SpecContainerEnvFromConfigMapRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecContainerEnvFromSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecContainerEnvFrom extends cdktf.ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: false
  public get configMapRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map_ref');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePostStartExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePostStartHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePostStartHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePostStartTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePostStart extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePreStopExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePreStopHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePreStopHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePreStopTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecContainerLifecyclePreStop extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
}
export class DataKubernetesPodV1SpecContainerLifecycle extends cdktf.ComplexComputedList {

  // post_start - computed: true, optional: false, required: false
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start');
  }

  // pre_stop - computed: true, optional: false, required: false
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop');
  }
}
export class DataKubernetesPodV1SpecContainerLivenessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecContainerLivenessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecContainerLivenessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecContainerLivenessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecContainerLivenessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecContainerPort extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodV1SpecContainerReadinessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecContainerReadinessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecContainerReadinessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecContainerReadinessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecContainerReadinessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecContainerResources extends cdktf.ComplexComputedList {

  // limits - computed: true, optional: false, required: false
  public get limits() {
    return this.getStringMapAttribute('limits');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
}
export class DataKubernetesPodV1SpecContainerSecurityContextCapabilities extends cdktf.ComplexComputedList {

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodV1SpecContainerSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodV1SpecContainerSecurityContext extends cdktf.ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('capabilities');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('se_linux_options');
  }
}
export class DataKubernetesPodV1SpecContainerStartupProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecContainerStartupProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecContainerStartupProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecContainerStartupProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecContainerStartupProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecContainerVolumeMount extends cdktf.ComplexComputedList {

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodV1SpecContainer extends cdktf.ComplexComputedList {

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env');
  }

  // env_from - computed: true, optional: false, required: false
  public get envFrom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env_from');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle');
  }

  // liveness_probe - computed: true, optional: false, required: false
  public get livenessProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('liveness_probe');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port');
  }

  // readiness_probe - computed: true, optional: false, required: false
  public get readinessProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_probe');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resources');
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('security_context');
  }

  // startup_probe - computed: true, optional: false, required: false
  public get startupProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('startup_probe');
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  public get volumeMount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_mount');
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodV1SpecDnsConfigOption extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecDnsConfig extends cdktf.ComplexComputedList {

  // nameservers - computed: true, optional: false, required: false
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }

  // option - computed: true, optional: false, required: false
  public get option() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('option');
  }

  // searches - computed: true, optional: false, required: false
  public get searches() {
    return this.getListAttribute('searches');
  }
}
export class DataKubernetesPodV1SpecHostAliases extends cdktf.ComplexComputedList {

  // hostnames - computed: true, optional: false, required: false
  public get hostnames() {
    return this.getListAttribute('hostnames');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }
}
export class DataKubernetesPodV1SpecImagePullSecrets extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvValueFromConfigMapKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvValueFromFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvValueFromResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvValueFromSecretKeyRef extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvValueFrom extends cdktf.ComplexComputedList {

  // config_map_key_ref - computed: true, optional: false, required: false
  public get configMapKeyRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map_key_ref');
  }

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field_ref');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_field_ref');
  }

  // secret_key_ref - computed: true, optional: false, required: false
  public get secretKeyRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_key_ref');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnv extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_from - computed: true, optional: false, required: false
  public get valueFrom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('value_from');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvFromConfigMapRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvFromSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecInitContainerEnvFrom extends cdktf.ComplexComputedList {

  // config_map_ref - computed: true, optional: false, required: false
  public get configMapRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map_ref');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePostStartExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePostStartHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePostStartHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePostStartTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePostStart extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePreStopExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePreStopHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePreStopHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePreStopTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecyclePreStop extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }
}
export class DataKubernetesPodV1SpecInitContainerLifecycle extends cdktf.ComplexComputedList {

  // post_start - computed: true, optional: false, required: false
  public get postStart() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('post_start');
  }

  // pre_stop - computed: true, optional: false, required: false
  public get preStop() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('pre_stop');
  }
}
export class DataKubernetesPodV1SpecInitContainerLivenessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecInitContainerLivenessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecInitContainerLivenessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecInitContainerLivenessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecInitContainerLivenessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecInitContainerPort extends cdktf.ComplexComputedList {

  // container_port - computed: true, optional: false, required: false
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }

  // host_ip - computed: true, optional: false, required: false
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }

  // host_port - computed: true, optional: false, required: false
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}
export class DataKubernetesPodV1SpecInitContainerReadinessProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecInitContainerReadinessProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecInitContainerReadinessProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecInitContainerReadinessProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecInitContainerResources extends cdktf.ComplexComputedList {

  // limits - computed: true, optional: false, required: false
  public get limits() {
    return this.getStringMapAttribute('limits');
  }

  // requests - computed: true, optional: false, required: false
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
}
export class DataKubernetesPodV1SpecInitContainerSecurityContextCapabilities extends cdktf.ComplexComputedList {

  // add - computed: true, optional: false, required: false
  public get add() {
    return this.getListAttribute('add');
  }

  // drop - computed: true, optional: false, required: false
  public get drop() {
    return this.getListAttribute('drop');
  }
}
export class DataKubernetesPodV1SpecInitContainerSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodV1SpecInitContainerSecurityContext extends cdktf.ComplexComputedList {

  // allow_privilege_escalation - computed: true, optional: false, required: false
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }

  // capabilities - computed: true, optional: false, required: false
  public get capabilities() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('capabilities');
  }

  // privileged - computed: true, optional: false, required: false
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }

  // read_only_root_filesystem - computed: true, optional: false, required: false
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('se_linux_options');
  }
}
export class DataKubernetesPodV1SpecInitContainerStartupProbeExec extends cdktf.ComplexComputedList {

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }
}
export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGetHttpHeader extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecInitContainerStartupProbeHttpGet extends cdktf.ComplexComputedList {

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_header');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
}
export class DataKubernetesPodV1SpecInitContainerStartupProbeTcpSocket extends cdktf.ComplexComputedList {

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }
}
export class DataKubernetesPodV1SpecInitContainerStartupProbe extends cdktf.ComplexComputedList {

  // exec - computed: true, optional: false, required: false
  public get exec() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('exec');
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // http_get - computed: true, optional: false, required: false
  public get httpGet() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_get');
  }

  // initial_delay_seconds - computed: true, optional: false, required: false
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }

  // period_seconds - computed: true, optional: false, required: false
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }

  // success_threshold - computed: true, optional: false, required: false
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }

  // tcp_socket - computed: true, optional: false, required: false
  public get tcpSocket() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tcp_socket');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
}
export class DataKubernetesPodV1SpecInitContainerVolumeMount extends cdktf.ComplexComputedList {

  // mount_path - computed: true, optional: false, required: false
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }

  // mount_propagation - computed: true, optional: false, required: false
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // sub_path - computed: true, optional: false, required: false
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
}
export class DataKubernetesPodV1SpecInitContainer extends cdktf.ComplexComputedList {

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env');
  }

  // env_from - computed: true, optional: false, required: false
  public get envFrom() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('env_from');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_pull_policy - computed: true, optional: false, required: false
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }

  // lifecycle - computed: true, optional: false, required: false
  public get lifecycle() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('lifecycle');
  }

  // liveness_probe - computed: true, optional: false, required: false
  public get livenessProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('liveness_probe');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('port');
  }

  // readiness_probe - computed: true, optional: false, required: false
  public get readinessProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_probe');
  }

  // resources - computed: true, optional: false, required: false
  public get resources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resources');
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('security_context');
  }

  // startup_probe - computed: true, optional: false, required: false
  public get startupProbe() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('startup_probe');
  }

  // stdin - computed: true, optional: false, required: false
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }

  // stdin_once - computed: true, optional: false, required: false
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }

  // termination_message_path - computed: true, optional: false, required: false
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }

  // termination_message_policy - computed: true, optional: false, required: false
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }

  // tty - computed: true, optional: false, required: false
  public get tty() {
    return this.getBooleanAttribute('tty');
  }

  // volume_mount - computed: true, optional: false, required: false
  public get volumeMount() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume_mount');
  }

  // working_dir - computed: true, optional: false, required: false
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
}
export class DataKubernetesPodV1SpecReadinessGate extends cdktf.ComplexComputedList {

  // condition_type - computed: true, optional: false, required: false
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
}
export class DataKubernetesPodV1SpecSecurityContextSeLinuxOptions extends cdktf.ComplexComputedList {

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodV1SpecSecurityContextSysctl extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecSecurityContext extends cdktf.ComplexComputedList {

  // fs_group - computed: true, optional: false, required: false
  public get fsGroup() {
    return this.getStringAttribute('fs_group');
  }

  // run_as_group - computed: true, optional: false, required: false
  public get runAsGroup() {
    return this.getStringAttribute('run_as_group');
  }

  // run_as_non_root - computed: true, optional: false, required: false
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }

  // run_as_user - computed: true, optional: false, required: false
  public get runAsUser() {
    return this.getStringAttribute('run_as_user');
  }

  // se_linux_options - computed: true, optional: false, required: false
  public get seLinuxOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('se_linux_options');
  }

  // supplemental_groups - computed: true, optional: false, required: false
  public get supplementalGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('supplemental_groups')));
  }

  // sysctl - computed: true, optional: false, required: false
  public get sysctl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sysctl');
  }
}
export class DataKubernetesPodV1SpecToleration extends cdktf.ComplexComputedList {

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // toleration_seconds - computed: true, optional: false, required: false
  public get tolerationSeconds() {
    return this.getStringAttribute('toleration_seconds');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelectorMatchExpressions extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
}
export class DataKubernetesPodV1SpecTopologySpreadConstraintLabelSelector extends cdktf.ComplexComputedList {

  // match_expressions - computed: true, optional: false, required: false
  public get matchExpressions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('match_expressions');
  }

  // match_labels - computed: true, optional: false, required: false
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
}
export class DataKubernetesPodV1SpecTopologySpreadConstraint extends cdktf.ComplexComputedList {

  // label_selector - computed: true, optional: false, required: false
  public get labelSelector() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('label_selector');
  }

  // max_skew - computed: true, optional: false, required: false
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }

  // topology_key - computed: true, optional: false, required: false
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }

  // when_unsatisfiable - computed: true, optional: false, required: false
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
}
export class DataKubernetesPodV1SpecVolumeAwsElasticBlockStore extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodV1SpecVolumeAzureDisk extends cdktf.ComplexComputedList {

  // caching_mode - computed: true, optional: false, required: false
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }

  // data_disk_uri - computed: true, optional: false, required: false
  public get dataDiskUri() {
    return this.getStringAttribute('data_disk_uri');
  }

  // disk_name - computed: true, optional: false, required: false
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodV1SpecVolumeAzureFile extends cdktf.ComplexComputedList {

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }

  // secret_namespace - computed: true, optional: false, required: false
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }

  // share_name - computed: true, optional: false, required: false
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
}
export class DataKubernetesPodV1SpecVolumeCephFsSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeCephFs extends cdktf.ComplexComputedList {

  // monitors - computed: true, optional: false, required: false
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_file - computed: true, optional: false, required: false
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export class DataKubernetesPodV1SpecVolumeCinder extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}
export class DataKubernetesPodV1SpecVolumeConfigMapItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeConfigMap extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecVolumeCsiControllerExpandSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeCsiControllerPublishSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeCsiNodePublishSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeCsiNodeStageSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeCsi extends cdktf.ComplexComputedList {

  // controller_expand_secret_ref - computed: true, optional: false, required: false
  public get controllerExpandSecretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('controller_expand_secret_ref');
  }

  // controller_publish_secret_ref - computed: true, optional: false, required: false
  public get controllerPublishSecretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('controller_publish_secret_ref');
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // node_publish_secret_ref - computed: true, optional: false, required: false
  public get nodePublishSecretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_publish_secret_ref');
  }

  // node_stage_secret_ref - computed: true, optional: false, required: false
  public get nodeStageSecretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_stage_secret_ref');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // volume_attributes - computed: true, optional: false, required: false
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }

  // volume_handle - computed: true, optional: false, required: false
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
}
export class DataKubernetesPodV1SpecVolumeDownwardApiItemsFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodV1SpecVolumeDownwardApiItemsResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodV1SpecVolumeDownwardApiItems extends cdktf.ComplexComputedList {

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field_ref');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_field_ref');
  }
}
export class DataKubernetesPodV1SpecVolumeDownwardApi extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
}
export class DataKubernetesPodV1SpecVolumeEmptyDir extends cdktf.ComplexComputedList {

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
}
export class DataKubernetesPodV1SpecVolumeFc extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_ww_ns - computed: true, optional: false, required: false
  public get targetWwNs() {
    return cdktf.Fn.tolist(this.getListAttribute('target_ww_ns'));
  }
}
export class DataKubernetesPodV1SpecVolumeFlexVolumeSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeFlexVolume extends cdktf.ComplexComputedList {

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringMapAttribute('options');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }
}
export class DataKubernetesPodV1SpecVolumeFlocker extends cdktf.ComplexComputedList {

  // dataset_name - computed: true, optional: false, required: false
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }

  // dataset_uuid - computed: true, optional: false, required: false
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
}
export class DataKubernetesPodV1SpecVolumeGcePersistentDisk extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getNumberAttribute('partition');
  }

  // pd_name - computed: true, optional: false, required: false
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodV1SpecVolumeGitRepo extends cdktf.ComplexComputedList {

  // directory - computed: true, optional: false, required: false
  public get directory() {
    return this.getStringAttribute('directory');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }
}
export class DataKubernetesPodV1SpecVolumeGlusterfs extends cdktf.ComplexComputedList {

  // endpoints_name - computed: true, optional: false, required: false
  public get endpointsName() {
    return this.getStringAttribute('endpoints_name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodV1SpecVolumeHostPath extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataKubernetesPodV1SpecVolumeIscsi extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // iqn - computed: true, optional: false, required: false
  public get iqn() {
    return this.getStringAttribute('iqn');
  }

  // iscsi_interface - computed: true, optional: false, required: false
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }

  // lun - computed: true, optional: false, required: false
  public get lun() {
    return this.getNumberAttribute('lun');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // target_portal - computed: true, optional: false, required: false
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
}
export class DataKubernetesPodV1SpecVolumeLocal extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeNfs extends cdktf.ComplexComputedList {

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export class DataKubernetesPodV1SpecVolumePersistentVolumeClaim extends cdktf.ComplexComputedList {

  // claim_name - computed: true, optional: false, required: false
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}
export class DataKubernetesPodV1SpecVolumePhotonPersistentDisk extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // pd_id - computed: true, optional: false, required: false
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMapItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesConfigMap extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsFieldRef extends cdktf.ComplexComputedList {

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // field_path - computed: true, optional: false, required: false
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItemsResourceFieldRef extends cdktf.ComplexComputedList {

  // container_name - computed: true, optional: false, required: false
  public get containerName() {
    return this.getStringAttribute('container_name');
  }

  // divisor - computed: true, optional: false, required: false
  public get divisor() {
    return this.getStringAttribute('divisor');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApiItems extends cdktf.ComplexComputedList {

  // field_ref - computed: true, optional: false, required: false
  public get fieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('field_ref');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // resource_field_ref - computed: true, optional: false, required: false
  public get resourceFieldRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_field_ref');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesDownwardApi extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecretItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesSecret extends cdktf.ComplexComputedList {

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSourcesServiceAccountToken extends cdktf.ComplexComputedList {

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // expiration_seconds - computed: true, optional: false, required: false
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeProjectedSources extends cdktf.ComplexComputedList {

  // config_map - computed: true, optional: false, required: false
  public get configMap() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map');
  }

  // downward_api - computed: true, optional: false, required: false
  public get downwardApi() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('downward_api');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret');
  }

  // service_account_token - computed: true, optional: false, required: false
  public get serviceAccountToken() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('service_account_token');
  }
}
export class DataKubernetesPodV1SpecVolumeProjected extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // sources - computed: true, optional: false, required: false
  public get sources() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('sources');
  }
}
export class DataKubernetesPodV1SpecVolumeQuobyte extends cdktf.ComplexComputedList {

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getStringAttribute('group');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    return this.getStringAttribute('volume');
  }
}
export class DataKubernetesPodV1SpecVolumeRbdSecretRef extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}
export class DataKubernetesPodV1SpecVolumeRbd extends cdktf.ComplexComputedList {

  // ceph_monitors - computed: true, optional: false, required: false
  public get cephMonitors() {
    return cdktf.Fn.tolist(this.getListAttribute('ceph_monitors'));
  }

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // keyring - computed: true, optional: false, required: false
  public get keyring() {
    return this.getStringAttribute('keyring');
  }

  // rados_user - computed: true, optional: false, required: false
  public get radosUser() {
    return this.getStringAttribute('rados_user');
  }

  // rbd_image - computed: true, optional: false, required: false
  public get rbdImage() {
    return this.getStringAttribute('rbd_image');
  }

  // rbd_pool - computed: true, optional: false, required: false
  public get rbdPool() {
    return this.getStringAttribute('rbd_pool');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // secret_ref - computed: true, optional: false, required: false
  public get secretRef() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret_ref');
  }
}
export class DataKubernetesPodV1SpecVolumeSecretItems extends cdktf.ComplexComputedList {

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export class DataKubernetesPodV1SpecVolumeSecret extends cdktf.ComplexComputedList {

  // default_mode - computed: true, optional: false, required: false
  public get defaultMode() {
    return this.getStringAttribute('default_mode');
  }

  // items - computed: true, optional: false, required: false
  public get items() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('items');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // secret_name - computed: true, optional: false, required: false
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
}
export class DataKubernetesPodV1SpecVolumeVsphereVolume extends cdktf.ComplexComputedList {

  // fs_type - computed: true, optional: false, required: false
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }

  // volume_path - computed: true, optional: false, required: false
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
}
export class DataKubernetesPodV1SpecVolume extends cdktf.ComplexComputedList {

  // aws_elastic_block_store - computed: true, optional: false, required: false
  public get awsElasticBlockStore() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('aws_elastic_block_store');
  }

  // azure_disk - computed: true, optional: false, required: false
  public get azureDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_disk');
  }

  // azure_file - computed: true, optional: false, required: false
  public get azureFile() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('azure_file');
  }

  // ceph_fs - computed: true, optional: false, required: false
  public get cephFs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ceph_fs');
  }

  // cinder - computed: true, optional: false, required: false
  public get cinder() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cinder');
  }

  // config_map - computed: true, optional: false, required: false
  public get configMap() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_map');
  }

  // csi - computed: true, optional: false, required: false
  public get csi() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('csi');
  }

  // downward_api - computed: true, optional: false, required: false
  public get downwardApi() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('downward_api');
  }

  // empty_dir - computed: true, optional: false, required: false
  public get emptyDir() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('empty_dir');
  }

  // fc - computed: true, optional: false, required: false
  public get fc() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('fc');
  }

  // flex_volume - computed: true, optional: false, required: false
  public get flexVolume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('flex_volume');
  }

  // flocker - computed: true, optional: false, required: false
  public get flocker() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('flocker');
  }

  // gce_persistent_disk - computed: true, optional: false, required: false
  public get gcePersistentDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('gce_persistent_disk');
  }

  // git_repo - computed: true, optional: false, required: false
  public get gitRepo() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('git_repo');
  }

  // glusterfs - computed: true, optional: false, required: false
  public get glusterfs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('glusterfs');
  }

  // host_path - computed: true, optional: false, required: false
  public get hostPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_path');
  }

  // iscsi - computed: true, optional: false, required: false
  public get iscsi() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('iscsi');
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('local');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nfs - computed: true, optional: false, required: false
  public get nfs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('nfs');
  }

  // persistent_volume_claim - computed: true, optional: false, required: false
  public get persistentVolumeClaim() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('persistent_volume_claim');
  }

  // photon_persistent_disk - computed: true, optional: false, required: false
  public get photonPersistentDisk() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('photon_persistent_disk');
  }

  // projected - computed: true, optional: false, required: false
  public get projected() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('projected');
  }

  // quobyte - computed: true, optional: false, required: false
  public get quobyte() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('quobyte');
  }

  // rbd - computed: true, optional: false, required: false
  public get rbd() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('rbd');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('secret');
  }

  // vsphere_volume - computed: true, optional: false, required: false
  public get vsphereVolume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('vsphere_volume');
  }
}
export class DataKubernetesPodV1Spec extends cdktf.ComplexComputedList {

  // active_deadline_seconds - computed: true, optional: false, required: false
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }

  // affinity - computed: true, optional: false, required: false
  public get affinity() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('affinity');
  }

  // automount_service_account_token - computed: true, optional: false, required: false
  public get automountServiceAccountToken() {
    return this.getBooleanAttribute('automount_service_account_token');
  }

  // container - computed: true, optional: false, required: false
  public get container() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('container');
  }

  // dns_config - computed: true, optional: false, required: false
  public get dnsConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('dns_config');
  }

  // dns_policy - computed: true, optional: false, required: false
  public get dnsPolicy() {
    return this.getStringAttribute('dns_policy');
  }

  // enable_service_links - computed: true, optional: false, required: false
  public get enableServiceLinks() {
    return this.getBooleanAttribute('enable_service_links');
  }

  // host_aliases - computed: true, optional: false, required: false
  public get hostAliases() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('host_aliases');
  }

  // host_ipc - computed: true, optional: false, required: false
  public get hostIpc() {
    return this.getBooleanAttribute('host_ipc');
  }

  // host_network - computed: true, optional: false, required: false
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }

  // host_pid - computed: true, optional: false, required: false
  public get hostPid() {
    return this.getBooleanAttribute('host_pid');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // image_pull_secrets - computed: true, optional: false, required: false
  public get imagePullSecrets() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('image_pull_secrets');
  }

  // init_container - computed: true, optional: false, required: false
  public get initContainer() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('init_container');
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // node_selector - computed: true, optional: false, required: false
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }

  // priority_class_name - computed: true, optional: false, required: false
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }

  // readiness_gate - computed: true, optional: false, required: false
  public get readinessGate() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('readiness_gate');
  }

  // restart_policy - computed: true, optional: false, required: false
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }

  // security_context - computed: true, optional: false, required: false
  public get securityContext() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('security_context');
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // share_process_namespace - computed: true, optional: false, required: false
  public get shareProcessNamespace() {
    return this.getBooleanAttribute('share_process_namespace');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // termination_grace_period_seconds - computed: true, optional: false, required: false
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }

  // toleration - computed: true, optional: false, required: false
  public get toleration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('toleration');
  }

  // topology_spread_constraint - computed: true, optional: false, required: false
  public get topologySpreadConstraint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('topology_spread_constraint');
  }

  // volume - computed: true, optional: false, required: false
  public get volume() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('volume');
  }
}
export interface DataKubernetesPodV1Metadata {
  /**
  * An unstructured key value map stored with the pod that may be used to store arbitrary metadata. More info: http://kubernetes.io/docs/user-guide/annotations
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#annotations DataKubernetesPodV1#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#generate_name DataKubernetesPodV1#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) the pod. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#labels DataKubernetesPodV1#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the pod, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#name DataKubernetesPodV1#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within which name of the pod must be unique.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1#namespace DataKubernetesPodV1#namespace}
  */
  readonly namespace?: string;
}

export function dataKubernetesPodV1MetadataToTerraform(struct?: DataKubernetesPodV1MetadataOutputReference | DataKubernetesPodV1Metadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class DataKubernetesPodV1MetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataKubernetesPodV1Metadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
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

  public set internalValue(value: DataKubernetesPodV1Metadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
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

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
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
* Represents a {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1 kubernetes_pod_v1}
*/
export class DataKubernetesPodV1 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "kubernetes_pod_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/kubernetes/d/pod_v1 kubernetes_pod_v1} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKubernetesPodV1Config
  */
  public constructor(scope: Construct, id: string, config: DataKubernetesPodV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_pod_v1',
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
    return new DataKubernetesPodV1Spec(this, 'spec', index, false);
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataKubernetesPodV1MetadataOutputReference(this, "metadata", true);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataKubernetesPodV1Metadata) {
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
      metadata: dataKubernetesPodV1MetadataToTerraform(this._metadata.internalValue),
    };
  }
}
