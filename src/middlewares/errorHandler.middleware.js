export const errorHandler = (error, req, res, next) => {
	if (error) {
		if (error.code) {
			req.logger.error(`${error.name}: ${error.cause} ${error.message}`)
			return res.status(error.code).json({ error: error.name + ': ' + error.cause})
		} else {
			req.logger.error(`Ocurrió un error inesperado: ${error.message}`)
			return res.status(500).json({ error: 'Unexpected error' })
		}
	}

	next()
}