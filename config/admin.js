module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1511f39f0e223b865261976cf56e4619'),
  },
});
