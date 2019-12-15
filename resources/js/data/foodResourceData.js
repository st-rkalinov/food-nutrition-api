const data = {
    name: {
        defValue: '',
        placeholder: 'Food Name',
        label: 'Name',
    },
    brand: {
        defValue: null,
        placeholder: 'Brand Name',
        label: 'Brand',
    },
    serving: {
        defValue: 0,
        placeholder: 'Serving Size',
        label: 'Serving',
    },
    unit: {
        defValue: 'gram',
        placeholder: 'Unit',
        label: 'Unit',
    },
    calories: {
        defValue: 0,
        placeholder: 'Calories',
        label: 'Calories',
    },
    fat: {
        defValue: 0,
        placeholder: 'Fat',
        label: 'Fat',
    },
    fat_satured: {
        defValue: 0,
        placeholder: 'Satured Fat',
        label: 'Satured Fat',
    },
    cholesterol: {
        defValue: 0,
        placeholder: 'Cholesterol',
        label: 'Cholesterol',
    },
    salt: {
        defValue: 0,
        placeholder: 'Salt',
        label: 'Salt',
    },
    carbohydrates: {
        defValue: 0,
        placeholder: 'Carbohydrates',
        label: 'Carbohydrates',
    },
    carbohydrates_fiber: {
        defValue: 0,
        placeholder: 'Carbohydrates Fiber',
        label: 'Carbohydrates Fiber',
    },
    carbohydrates_sugars: {
       defValue: 0,
       placeholder: 'Carbohydrates Sugars',
       label: 'Carbohydrates Sugars'
    },
    protein: {
        defValue: 0,
        placeholder: 'Protein',
        label: 'Protein',
    },
    public: {
        defValue: false,
        placeholder: null,
        label: 'Public ( can be viewed by all users )',
    }
};

const defValues = _.mapValues(data, 'defValue');
const labels = _.mapValues(data, 'label');

export { data as foodResourceData, defValues as defValues, labels as labels };
