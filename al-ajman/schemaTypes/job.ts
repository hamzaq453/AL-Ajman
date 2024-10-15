export default {
  name: 'job',
  title: 'Job Listing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'IT & Software', value: 'it_software' },
          { title: 'Construction', value: 'construction' },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Education', value: 'education' },
          { title: 'Finance', value: 'finance' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Sales', value: 'sales' },
          { title: 'Human Resources', value: 'human_resources' },
          { title: 'Design', value: 'design' },
        ],
      },
    },
    {
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
  ],
};
