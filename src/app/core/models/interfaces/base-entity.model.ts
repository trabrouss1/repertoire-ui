/**
 * Interface de base pour toutes les entités
 */
export interface BaseEntity {
  id?: number
  createdAt?: string
  updatedAt?: string
  createdBy?: string
  updatedBy?: string
}

/**
 * Interface pour les réponses paginées de l'API avec pagination
 */
export interface PaginatedResponse<T> {
  status: number
  success: boolean
  message: string
  data: T[]
  links: {
    last: string
    self: string
    first: string
  }
  page: {
    number: number
    size: number
    totalPages: number
    totalElements: number
  }
}


/**
 * Interface pour les réponses simples de l'API
 */
export interface ApiResponse<T> {
  status: number
  success: boolean
  message: string
  data: T
}

/**
 * Interface pour les paramètres de requête
 */
export interface QueryParams {
  page?: number
  size?: number
  sort?: string
  [key: string]: any
}

/**
 * Interface pour les erreurs API
 */
export interface ApiError {
  status: number
  success: false
  message: string
  errors?: Record<string, string[]>
}

