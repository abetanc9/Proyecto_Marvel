import React, { useState } from "react";
import Card from "./Card";

const Personajes = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 5; //Número de tarjetas por página
    const data = [<Card />]; // Datos de las tarjetas
    const totalPages = Math.ceil(data.length / cardsPerPage); // Cálculo del número total de páginas
    const startIndex = (currentPage - 1) * cardsPerPage; // Índice inicial de las tarjetas a mostrar
    const endIndex = startIndex + cardsPerPage; // Índice final de las tarjetas a mostrar
    const currentCards = data.slice(startIndex, endIndex); // Tarjetas a mostrar en la página actual

    const goToPreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const goToNextPage = () => {
        setCurrentPage((prevPage)=> prevPage + 1);
    };

    return (
        <div>
          {/* Mostrar las tarjetas de la página actual */}
          {currentCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
      
          {/* Botón "Anterior" */}
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
            &lt; Anterior
          </button>
      
          {/* Mostrar la página actual y el número total de páginas */}
          <span>{currentPage}</span> / <span>{totalPages}</span>
      
          {/* Botón "Siguiente" */}
          <button onClick={goToNextPage} disabled={currentPage === totalPages}>
            Siguiente &gt;
          </button>
        </div>
      );
}

export default Personajes;