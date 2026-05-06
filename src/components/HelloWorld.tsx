function HelloWorld() {
  const nombreSitio = 'ReactStore'
  const descripcion = 'Tu tienda de productos favorita'

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{nombreSitio}</h1>
      <p>{descripcion}</p>
    </div>
  )
}

export default HelloWorld