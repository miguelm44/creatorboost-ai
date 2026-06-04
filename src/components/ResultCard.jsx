import {
  FaBullseye,
  FaFire,
  FaLightbulb,
  FaVideo,
  FaPen,
  FaRocket
} from "react-icons/fa";

function ResultCard({ resultado }) {

  const cards = [
  {
    titulo: "Público Ideal",
    icone: <FaBullseye />,
    texto: resultado.publicoIdeal
  },
  {
    titulo: "Principais Dores",
    icone: <FaFire />,
    texto: resultado.dores
  },
  {
    titulo: "Ideias de Conteúdo",
    icone: <FaLightbulb />,
    texto: resultado.ideias
  },
  {
    titulo: "Ganchos para Vídeos",
    icone: <FaVideo />,
    texto: resultado.ganchos
  },
  {
    titulo: "Legenda Pronta",
    icone: <FaPen />,
    texto: resultado.legenda
  },
  {
    titulo: "Chamada para Ação",
    icone: <FaRocket />,
    texto: resultado.cta
  }
];

return (
  <div className="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3">
    {cards.map((card) => (
      <div
        key={card.titulo}
        className="card bg-white shadow-lg"
      >
        <div className="card-body">
          <div className="flex items-center gap-2 text-blue-600 text-xl">
            {card.icone}
            <h3 className="font-bold">
              {card.titulo}
            </h3>
          </div>

          {Array.isArray(card.texto) ? (
            <ul className="list-disc pl-5 text-slate-600 space-y-2">
              {card.texto.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-slate-600">
              {card.texto}
            </p>
          )}

        </div>
      </div>
    ))}
  </div>
);
}

export default ResultCard;