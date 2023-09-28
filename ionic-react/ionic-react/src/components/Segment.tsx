import React from "react";
import { IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import "./Segment.css";

const InputControl: React.FC<{
  selected: "mkg" | "ftlbs";
  onSelectValue: (value: "mkg" | "ftlbs") => void;
}> = (props) => {
  const inputChangehandler=(event:CustomEvent)=>{
    props.onSelectValue(event.detail.value)
  }
  return (
    <>
      <IonSegment value={props.selected} onIonChange={inputChangehandler}>
        <IonSegmentButton value="mkg">
          <IonLabel>m/kg</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="ftlbs">
          <IonLabel>ft/lbs</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
};

export default InputControl;
