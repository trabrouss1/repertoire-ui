export const GlobalConstant = {

  API_END_POINT: {
    CONTACT: {
      CONTROLLER: 'contacts',
      METHOD: {
        GET: '',
        CREATE: '',
        UPDATE: '',
        DELETE: ''
      }
    }
  },

  /* =======================
  * VALIDATION MESSAGES
  * ======================= */
  VALIDATION_MESSAGE: {
    REQUIRED: (field: string) => `Le champ ${field} est obligatoire`,
    MIN_LENGTH: (min: number) => `Minimum ${min} caractères requis`,
    MAX_LENGTH: (max: number) => `Maximum ${max} caractères autorisés`,
    EMAIL: 'Adresse email invalide',
    PATTERN: 'Format invalide'
  },


  REG_EXP: {
    EMAIL: ''
  }
}