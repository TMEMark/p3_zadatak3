import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <Text style={styles.mainHeader}>ŽIVOTOPIS</Text>

        <Image style={styles.image} source={require('./assets/DSC_0803.jpg')} />

        <Text style={styles.heading}>OBRAZOVANJE</Text>
        <Text style={styles.text}>
          I. gimnazija Osijek 2014.-2018. Županijska ul. 4, 31 000 Osijek
          Filozofski fakultet Osijek Preddiplomski jednopredmetni studij Odsjek
          za informacijske znanosti 2018. – 2021. Ul. Lorenza Jagera 9, 31 000
          Osijek Filozofski fakultet Osijek, Diplomski dvopredmetni studij
          Informacijske tehnologije i nakladništva 2021. – Ul. Lorenza Jagera 9,
          31 000 Osijek
        </Text>
        <Text style={styles.heading}>RADNO ISKUSTVO</Text>
        <Text style={styles.text}>
           Konzum d.o.o. - blagajnik(student) (01.08.2018. – 01.09.2018.) 
          Nova moda d.o.o – pomoćni radnik (26.8.2019. – 28.9.2019.)  Erasmus
          radionica za djecu Osnovne Škole Vladimira Becića o radu u Edmodo i
          ClassDojo (14.12.2021. i 16.12.2021.)  Ženska udruga Izvor – izrada
          web aplikacije (25.02.2022. - )  Praksa: ORKA d.o.o (09.06.2020. –
          24.07.2020.) Hammer d.o.o (20.07.2021. – 15.08.2021.) DICE d.o.o.
          backend development praksa (16.05.2022. - )
        </Text>
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.heading}>VJEŠTINE I IZVANNASTAVNE AKTIVNOSTI</Text>
        <Text style={styles.text}>
           Engleski jezik – B2  Njemački jezik – B1  Programski jezici i
          jezici za označivanje i uređivanje sadržaja: Iskustvo rada u HTML-u,
          XML-u, SVG-u, XHTML-u, CSS-u, JavaScript-u, React-u, Node-u, PHP-u,
          Javi, PostgreSQL-u, Mongo DB-u i SQL-u.  Dizajn: iskustvo rada s
          Figmom  Volonterski rad: Muzej Slavonija Osijek (01.12.2018.-
          28.01.2019.)  Izvannastavne aktivnosti: WebCamp Zagreb (2020.), Mosh!
          Hackathon (15.10.2021. – 16.10.2021.), Gong Hackathon Dani otvorenih
          podataka 2022. (25.02.2022.),  Kreativnost  Proaktivnost 
          Komunikativnost I društvenost  Prezentiranje  Otvorenost prema novim
          znanjima i iskustvima
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#f0f0f0',
    padding: 8,
  },
  image: {
    width: 150,
    height: 150,
  },

  productContainer: {
    paddingTop: '50px',
    width: '50%',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  heading: {
    fontWeight: 'bold',
    padding: '5px',
  },
  mainHeader: {
    fontWeight: 'bold',
    padding: '10px',
    fontSize: '18px',
  },
});
