'use strict';

export interface GenerateClickActionInterface {
  count: number;
  type: string;
};

export const generateClick = (count: number): GenerateClickActionInterface => {
    return {
        type: 'GENERATE_CLICK',
        count
    };
};
