import * as yup from 'yup';
import { performanceEvaluationValidationSchema } from 'validationSchema/performance-evaluations';
import { trainingSessionValidationSchema } from 'validationSchema/training-sessions';

export const playerValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  academy_id: yup.string().nullable().required(),
  coach_id: yup.string().nullable(),
  performance_evaluation: yup.array().of(performanceEvaluationValidationSchema),
  training_session: yup.array().of(trainingSessionValidationSchema),
});
