
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  TheBodyHealth from './TheBodyHealth/TheBodyHealth.tsx'
import TheCalendar from './TheCalendar/TheCalendar.tsx'
import TheMusic from './TheMusic/TheMusic.tsx'
import TheWeather from './TheWeather/TheWeather.tsx'
import TheTasks from './TheTasks/TheTasks.tsx'
import { Provider } from 'react-redux'
import React from 'react'
// import store from './store/store.ts';
import ThePushups from './ThePushups/ThePushups.tsx'
import { store } from './store/store.ts'
const router = createBrowserRouter([
    {
        path: "/",
        Component: App
    },
    {
        path: "/body",
        Component: TheBodyHealth
    },
    {
        path: "/calendar",
        Component: TheCalendar
    },
    {
        path: "/music",
        Component: TheMusic
    },
    {
        path: "/weather",
        Component: TheWeather
    },
    {
        path: "/tasks",
        Component: TheTasks
    },
    {
        path: "/pushups",
        Component: ThePushups
    },
])



createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
