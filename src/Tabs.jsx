import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabsF() {
  const [hoveredTab, setHoveredTab] = useState(null);

  // Estilos para os tabs
  const tabStyle = {
    color: '#ffffff', // Cor do texto padrão
    transition: 'color 0.3s ease', // Transição suave
    borderColor: 'white', // Cor da borda
    padding: '10px 15px', // Padding para melhor aparência
  };

  const hoveredStyle = {
    color: '#FFA500', // Cor laranja ao passar o mouse
    borderColor: 'white', // Cor da borda permanece branca
  };

  const activeStyle = {
    color: '#FFA500', // Cor do texto ativo
    borderColor: 'white', // Borda ativa branca
  };

  return (
    <Tabs
      defaultActiveKey="Todos"
      id="uncontrolled-tab-example"
      className="mb-3"
      variant="underline"
      style={{ borderBottom: '1px solid white' }} // Cor da borda inferior
    >
      <Tab 
        eventKey="Todos" 
        title={
          <span 
            style={{
              ...tabStyle,
              ...(hoveredTab === 'Todos' ? hoveredStyle : {}),
              ...(hoveredTab === null && activeStyle),
            }}
            onMouseEnter={() => setHoveredTab('Todos')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Todos
          </span>
        }
      >
        <div style={{ color: '#ffffff' }}>Tab content for Todos</div>
      </Tab>
      <Tab 
        eventKey="Mais recentes" 
        title={
          <span 
            style={{
              ...tabStyle,
              ...(hoveredTab === 'Mais recentes' ? hoveredStyle : {}),
              ...(hoveredTab === null && activeStyle),
            }}
            onMouseEnter={() => setHoveredTab('Mais recentes')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Mais recentes
          </span>
        }
      >
        <div style={{ color: '#ffffff' }}>Tab content for Profile</div>
      </Tab>
      <Tab 
        eventKey="Futuros projetos" 
        title={
          <span 
            style={{
              ...tabStyle,
              ...(hoveredTab === 'Futuros projetos' ? hoveredStyle : {}),
              ...(hoveredTab === null && activeStyle),
            }}
            onMouseEnter={() => setHoveredTab('Futuros projetos')}
            onMouseLeave={() => setHoveredTab(null)}
          >
            Futuros projetos
          </span>
        }
      >
        <div style={{ color: '#ffffff' }}>Tab content for Contact</div>
      </Tab>
    </Tabs>
  );
}

export default TabsF;
