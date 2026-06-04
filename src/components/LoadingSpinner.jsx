function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 gap-4">

      <span className="loading loading-spinner loading-lg text-primary"></span>

      <p className="text-slate-600 font-medium">
        🤖 Criando estratégia com IA...
      </p>

    </div>
  );
}

export default LoadingSpinner;