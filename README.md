# practicafinal
Practica final de la asignatura de ATWM.

Relizaremos una red social.

Primerament hem de crear el contenidor docker per tal de poder treballar amb nodejs i allotjar la nostra base de dades mongodb. Per això primerament creem un fitxer dokerfile on contindra les instruccions que executara el nostre contenidor, tambe necessitem un arxiu docker-compose on trobarem la informació del que contindra el nostre contanidor docker. Tanmateix tambe creem una carpeta src on allotjarem el codi que contindra las nostra aplicació.

Per tal de poder treballar de forma mes comode amb el docker, creem una carpeta dintre de src on li indiquem els parametres. Al document docker-compose establim un apartat anomenat volumes on indiquem la ruta del fitxer per tal de que el doker es vaigi reiniciant a mesura que fem modificacions.
