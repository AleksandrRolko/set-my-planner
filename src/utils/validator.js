import _ from "lodash";

const getValidationResult = (validationRules, model) => {
  return _.entries(validationRules).reduce((acc, [field, conditions]) => {
    const failedCondition = _.find(conditions, condition => condition.invalid(model[field]));
    if (!_.isEmpty(failedCondition)) {
      acc.valid = false;
      acc[field] = failedCondition.message;
    }

    return acc;
  }, { valid: true });
}

export {
  getValidationResult,
}
