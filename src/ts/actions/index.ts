'use strict';

export interface GenerateClickActionInterface {
  count: number;
  type: string;
};

export const GenerateClick = (count: number): GenerateClickActionInterface => {
    return {
        type: 'GENERATE_CLICK',
        count
    };
};
