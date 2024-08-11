export const ADMIN_KEYBOARDS_CALLBACKS_DATA = {
  CITIES: 'admin_cities',
  PERSONS: 'admin_persons',
  CARDS: 'admin_cards',
  CREATE_CITY: 'admin_create_city',
  DELETE_CITY: 'admin_delete_city',
  TO_MAIN_PAGE: 'admin_to_main',
};

const { CITIES, CREATE_CITY, DELETE_CITY, TO_MAIN_PAGE } =
  ADMIN_KEYBOARDS_CALLBACKS_DATA;

export const mainPageKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Города', callback_data: CITIES }],
      // [{ text: 'Карта', callback_data: CARDS }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

export const emptyCitiesKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Создать город', callback_data: CREATE_CITY },
        { text: 'На главную', callback_data: TO_MAIN_PAGE },
      ],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

export const citiesKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'Создать город', callback_data: CREATE_CITY },
        { text: 'Удалить город', callback_data: DELETE_CITY },
      ],
      [{ text: 'На главную', callback_data: TO_MAIN_PAGE }],
    ],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};

export const toMainKeyboard = {
  reply_markup: {
    inline_keyboard: [[{ text: 'На главную', callback_data: TO_MAIN_PAGE }]],
    resize_keyboard: true,
    one_time_keyboard: true,
  },
};
