import React from "react";
import './main.global.css';
import { Layout } from "./components/Layout/Layout";
import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import { initStore } from "./services/store";
import { Provider } from "react-redux";
import { Navigate, Route, Routes } from 'react-router-dom';
import { Best, NotFound } from "./pages";

export const store = initStore();

export function App(){
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route path="/auth" element={<Navigate replace to={'/best'}/>}/>
            <Route path="/" element={<Navigate replace to={'/best'}/>} />
            <Route path="/best/*" element={ <Best /> }/>
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </Content>
      </Layout>
    </Provider>
  );
}