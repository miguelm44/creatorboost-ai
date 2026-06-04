



function ProductForm({
    formData,
    setFormData,
    gerarEstrategia,
}) {

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


   return (
    <div className="card bg-white shadow-2xl p-6">
        <h2 className="text-2xl font-semibold mb-6 text-slate-800">
            Informações do Produto
        </h2>

        <div className="grid gap-4">

            <label className="label">
                <span className="label-text font-medium">
                    Nome do Produto
                </span>
            </label>

            <input
                type="text"
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                placeholder="Ex: Curso de nutrição"
                className="input input-bordered bg-slate-50 w-full"
            />

            <label className="label">
                <span className="label-text font-medium">
                    Descrição do Produto
                </span>
            </label>

            <textarea
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                placeholder="Ex: Curso online de nutrição para perda de peso"
                className="textarea textarea-bordered bg-slate-50 w-full h-32"
            />

            <label className="label">
                <span className="label-text font-medium">
                    Público-Alvo
                </span>
            </label>

            <input
                type="text"
                name="publico"
                value={formData.publico}
                onChange={handleChange}
                placeholder="Ex: Mulheres de 25 a 45 anos que desejam emagrecer"
                className="input input-bordered bg-slate-50 w-full"
            />

            <label className="label">
                <span className="label-text font-medium">
                    Plataforma
                </span>
            </label>

            <select
                name="plataforma"
                value={formData.plataforma}
                onChange={handleChange}
                className="select select-bordered bg-slate-50 w-full"
            >
                <option>TikTok</option>
                <option>Instagram</option>
                <option>YouTube Shorts</option>
            </select>

            <label className="label">
                <span className="label-text font-medium">
                    Objetivo da Campanha
                </span>
            </label>

            <select
                name="objetivo"
                value={formData.objetivo}
                onChange={handleChange}
                className="select select-bordered bg-slate-50 w-full"
            >
                <option>Gerar Vendas</option>
                <option>Gerar Engajamento</option>
                <option>Captar Leads</option>
            </select>

            <button
                onClick={gerarEstrategia}
                className="btn btn-primary"
            >
                Gerar Estratégia
            </button>
        </div>
    </div>
);
}

export default ProductForm;