import { PlayerInterface } from 'interfaces/player';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceEvaluationInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  date: any;
  evaluation: string;
  created_at?: any;
  updated_at?: any;

  player?: PlayerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PerformanceEvaluationGetQueryInterface extends GetQueryInterface {
  id?: string;
  player_id?: string;
  coach_id?: string;
  evaluation?: string;
}
