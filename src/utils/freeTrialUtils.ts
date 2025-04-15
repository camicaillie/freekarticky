// Define the type for our free trial configuration
type FreeTrialConfig = {
  availableSubcategories: {
    [key: string]: string[]
  }
};

// Define free trial access configuration
const FREE_TRIAL_CONFIG: FreeTrialConfig = {
  // Subcategory IDs that are available in free trial
  availableSubcategories: {
    'general': ['psychologie'], // Only psychology in "Člověk a společnost"
    'pravo-politologie': ['pravo'], // Only "pravo" in "Pravo a politologie"
    'moderni-historie': ['ekonomie'] // Only ekonomie in "Moderní historie a ekonomie"
  }
};

/**
 * Check if a subcategory is available in the free trial version
 * @param categoryId The ID of the category
 * @param subcategoryId The ID of the subcategory
 * @returns Boolean indicating if the subcategory is available in free trial
 */
export const isSubcategoryAvailableInFreeTrial = (categoryId: string, subcategoryId: string): boolean => {
  // Check if category exists in free trial config
  if (!FREE_TRIAL_CONFIG.availableSubcategories[categoryId]) {
    return false;
  }
  
  // Check if subcategory is in the list of available subcategories for this category
  return FREE_TRIAL_CONFIG.availableSubcategories[categoryId].includes(subcategoryId);
};

/**
 * Checks if the app is running in free trial mode
 * This could be expanded to check for a license key or user subscription status
 */
export const isFreeTrialMode = (): boolean => {
  // For now, always return true - this is the free trial version
  return true;
}; 