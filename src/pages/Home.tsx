import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, 
  IonModal,IonButton, IonItem, IonIcon,IonLabel, IonList
} from '@ionic/react';
import { list} from 'ionicons/icons';

import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [showIncomeModal, setShowIncomeModal] = useState(false)
  const [showExpenseModal, setShowExpenseModal] = useState(false)
  return (
    <IonPage className={'budget-home'}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Personal Budget</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Personal Budget</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className={'main-card'}>
          <IonCardHeader>
            <IonCardSubtitle>Mar 21 2021</IonCardSubtitle>
            <IonTitle>628 OF 2000 $</IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                TODAY - 10/60
                </IonCol>
                <IonCol size="6">
                LEFT in MONTH - 16800
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonModal isOpen={showExpenseModal} cssClass='home-expense-modal'>
        <p>This is modal content</p>
        <IonButton color="primary" onClick={()=> setShowExpenseModal(false)}>Done</IonButton>
      </IonModal>
      
<IonButton color="danger" onClick={() => setShowExpenseModal(true)}>Add Expense</IonButton>
<IonButton color="success" onClick={() => setShowIncomeModal(true)}>Add income</IonButton>
              
      </IonContent>
      <IonContent className={'history-section'}>
      <IonList>
      <IonItem>
        <IonLabel>Pokémon Yellow</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Mega Man X</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>The Legend of Zelda</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Pac-Man</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Super Mario World</IonLabel>
      </IonItem>
    </IonList>

      </IonContent>

      
    </IonPage>
  );
};

export default Home;
