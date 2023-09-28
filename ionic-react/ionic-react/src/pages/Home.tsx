import React, { useRef, useState } from "react";

import {
  IonContent,
  IonGrid,
  IonRow,
  IonItem,
  IonCol,
  IonLabel,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonAlert,
} from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";
import "./Home.css";
import InputControl from "../components/Segment";

const Home = () => {
  const [bmi, setBmi] = useState<number>();
  const [error, setError] = useState<String>();
  const [calcUnit, setCalcUnit] = useState<"mkg" | "ftlbs">("mkg");
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBmi = () => {
    const enteredWeight = weightInputRef.current!.value;
    const enteredHeight = heightInputRef.current!.value; //! can never be null
   
    if (
      !enteredHeight ||
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0 ||isNaN(+enteredHeight)||isNaN(+enteredWeight)
    ) {
      setError("Please enter a valid input value");
      return;
    }
    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight); // + means to convert to number
    setBmi(bmi);
  };
  const resetInputs = () => {
    weightInputRef.current!.value = "";
    heightInputRef.current!.value = "";
  };
  const clearError = () => {
    setError("");
  };
  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnit(selectedValue);
  };
  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        header="Alert"
        subHeader="Invalid input"
        message="Please enter a valid input value!"
        buttons={["OK"]}
        onDidDismiss={() => clearError()}
      ></IonAlert>
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI Calculator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol>
                <InputControl
                  selected={calcUnit}
                  onSelectValue={selectCalcUnitHandler}
                />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  {/* <IonLabel position="floating">Your Height ({calcUnit === 'mkg'?'meters':'feet'})</IonLabel>  */}
                  <IonInput
                    ref={heightInputRef}
                    labelPlacement="floating"
                    label={calcUnit === 'mkg'?'Height (meters)':'Height(feet)'}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem>
                  {/* <IonLabel position="floating">Your Weight {calcUnit === 'mkg'?'kg':'lbs'}</IonLabel> */}
                  <IonInput
                    ref={weightInputRef}
                    labelPlacement="floating"
                    label={calcUnit === 'mkg'?'Weight (kg)':'Weight(lbs)'}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-texr-left">
                <IonButton onClick={calculateBmi}>
                  <IonIcon slot="start" icon={calculatorOutline} />
                  Calculate
                </IonButton>
              </IonCol>
              <IonCol className="ion-texr-right">
                <IonButton onClick={resetInputs}>
                  <IonIcon slot="start" icon={refreshOutline} />
                  Reset
                </IonButton>
              </IonCol>
            </IonRow>
            {bmi && (
              <IonRow>
                <IonCol>
                  <IonCard>
                    <IonCardContent className="ion-text-center">
                      <h2>Your Body Mass Index</h2>
                      <h3>{bmi.toFixed(2)}</h3>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            )}
          </IonGrid>
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Home;
