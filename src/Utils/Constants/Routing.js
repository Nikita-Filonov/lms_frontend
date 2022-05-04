export const useBreadcrumbsRoutes = () => {

  const breadcrumbRoutes = [
    {path: '/courses', breadcrumb: 'Курсы'},
    {path: '/courses/edit/:courseId', breadcrumb: 'Редактирование курса'},
  ];

  const overrideBreadcrumbRoutes = {};

  const getOverrideUrl = (match) => Object.keys(overrideBreadcrumbRoutes).includes(match.path)
    ? match.url + overrideBreadcrumbRoutes[match.path]
    : match.url

  return {breadcrumbRoutes, getOverrideUrl};
};
