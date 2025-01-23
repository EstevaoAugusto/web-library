export const isLeitorMiddleware = (req, res, next) => {
    if (req.user.role !== 'leitor') {
      return res.status(403).json({ message: 'Acesso negado. Somente leitores podem realizar esta ação.' });
    }
    next();
  };