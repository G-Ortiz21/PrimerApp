//Importar slot desde expo router;
//slot es un componente que servira como espacio para rederizar la pantalla segun la ruta

import { Slot, Stack } from "expo-router";

//layout raiz de la app.
//Este componente envuelve todas las rutas y vistas dentro de la carpeta app

export default function RootLayout() {
  return <Slot />;
}