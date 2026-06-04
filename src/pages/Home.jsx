import { useState, useEffect } from "react";
import ProductForm from "../components/ProductForm";
import ResultCard from "../components/ResultCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { gerarConteudo } from "../services/geminiService";



function Home() {


    const [loading, setLoading] = useState(false);

    const [resultado, setResultado] = useState(null);

    useEffect(() => {

  const resultadoSalvo =
    localStorage.getItem(
      "creatorboost_resultado"
    );

  if (resultadoSalvo) {
    setResultado(
      JSON.parse(resultadoSalvo)
    );
  }

}, []);

    const [formData, setFormData] = useState({
        produto: "",
        descricao: "",
        publico: "",
        plataforma: "TikTok",
        objetivo: "Gerar Vendas",
    });



    const gerarEstrategia = async () => {
        if (
  !formData.produto ||
  !formData.descricao ||
  !formData.publico
) {
  alert(
    "Preencha todos os campos antes de gerar a estratégia."
  );

  return;
}

        try {

            setLoading(true);



           const response = await gerarConteudo(formData);

let texto =
  response.candidates[0].content.parts[0].text;

texto = texto
  .replace("```json", "")
  .replace("```", "")
  .trim();

const dados = JSON.parse(texto);


console.log(dados);

setResultado(dados);

localStorage.setItem(
  "creatorboost_resultado",
  JSON.stringify(dados)
);

setLoading(false);

            setLoading(false);

        } catch (error) {

            console.error(error);

            setLoading(false);

        }
    };




    return (

        <div className="min-h-screen bg-slate-100 px-4 py-10">
            <div className="max-w-5xl mx-auto">

                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-slate-800">
                        CreatorBoost AI
                    </h1>

                    <p className="mt-4 text-slate-600">
                        Transforme seu produto em uma estratégia de conteúdo com IA.
                    </p>
                </div>

                <ProductForm
                    formData={formData}
                    setFormData={setFormData}
                    gerarEstrategia={gerarEstrategia}
                />

                {loading && <LoadingSpinner />}

                {resultado && !loading && (
                 <ResultCard resultado={resultado} />
                )}

            </div>

        </div>

    );
}

export default Home;