import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import { addArticle } from '../../slices/articlesSlice.js';
import urls from '../../urls.js';

const AddArticleForm = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
      theme: '',
      author: '',
      date: '',
    },
    validationSchema: object({
      title: string().required('Обязательное поле'),
      text: string().required('Обязательное поле'),
      theme: string().required('Обязательное поле'),
      author: string().required('Обязательное поле'),
      date: string().required('Обязательное поле'),
    }),
    onSubmit: (data) => {
      dispatch(addArticle(data));
      navigate(urls.root);
    },
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <h1>Создание статьи</h1>
      <Form onSubmit={formik.handleSubmit} className="">
        <fieldset>
          <FloatingLabel controlId="title" label="Заголовок" className="mb-3">
            <Form.Control
              value={formik.values.title}
              ref={inputRef}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.title}
              name="title"
              placeholder="Заголовок"
              autoComplete="title"
            />
            <Form.Control.Feedback type="invalid" tooltip>{formik.errors.title}</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="text" label="Текст" className="mb-3">
            <Form.Control
              as="textarea"
              value={formik.values.text}
              className="textarea-field"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={(formik.touched.text && !!formik.errors.text)}
              name="text"
              placeholder="Текст"
              autoComplete="text"
            />
            <Form.Control.Feedback type="invalid" tooltip>{formik.errors.text}</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="theme" label="Тема" className="mb-3">
            <Form.Control
              value={formik.values.theme}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={(formik.touched.theme && !!formik.errors.theme)}
              name="theme"
              placeholder="Тема"
              autoComplete="theme"
            />
            <Form.Control.Feedback type="invalid" tooltip>{formik.errors.theme}</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="author" label="Автор" className="mb-3">
            <Form.Control
              value={formik.values.author}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={(formik.touched.author && !!formik.errors.author)}
              name="author"
              placeholder="Автор"
              autoComplete="author"
            />
            <Form.Control.Feedback type="invalid" tooltip>{formik.errors.author}</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId="date" label="Дата" className="mb-3">
            <Form.Control
              type="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={(formik.touched.date && !!formik.errors.date)}
              name="date"
              placeholder="Дата"
              autoComplete="date"
            />
            <Form.Control.Feedback type="invalid" tooltip>{formik.errors.date}</Form.Control.Feedback>
          </FloatingLabel>
          <Button variant="outline-primary" className="w-100 mb-3" type="submit">Создать</Button>
          <Button as={Link} to={urls.root} variant="outline-primary" className="w-100">Отмена</Button>
        </fieldset>
      </Form>
    </>
  );
};

export default AddArticleForm;
