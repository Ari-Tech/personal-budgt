import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, 
  IonModal,IonButton, IonItem, IonIcon,IonLabel, IonList
} from '@ionic/react';
import { list, recordingSharp} from 'ionicons/icons';

import { useState } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const [showIncomeModal, setShowIncomeModal] = useState(false)
  const [showExpenseModal, setShowExpenseModal] = useState(false)
  const expenseList = [
      {
        amount: 20,
        category: 'food',
        date: '10-May-2021'
      },
      {
        amount: 20,
        category: 'food',
        date: '10-May-2021'
      },
      {
        amount: 20,
        category: 'food',
        date: '10-May-2021'
      }
  ]
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
            <IonCardSubtitle className={'budget-title'}>Mar 21 2021</IonCardSubtitle>
            <IonTitle>628 OF 2000 $</IonTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size="6">
                TODAY - 10/60
                </IonCol>
                <IonCol size="6">
                LEFT - 16800
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <IonModal isOpen={showExpenseModal} cssClass='home-expense-modal'>
        <p>This is modal content</p>
        <IonButton color="primary" onClick={()=> setShowExpenseModal(false)}>Done</IonButton>
      </IonModal>
      <div className={'button-holder'}>
      <IonButton color="danger" onClick={() => setShowExpenseModal(true)}>Add Expense</IonButton>
  <IonButton color="success" onClick={() => setShowIncomeModal(true)}>Add income</IonButton>
      </div>

              
      </IonContent>
      <IonContent className={'history-section'}>
      <IonList>
        {expenseList.map(record=>
          <IonItem>
          <IonLabel>{record.amount}</IonLabel>
          <IonLabel>{record.category}</IonLabel>
          <IonLabel>{record.date}</IonLabel>
        </IonItem>
        )}
      
    </IonList>

      </IonContent>

      
    </IonPage>
  );
};

export default Home;
