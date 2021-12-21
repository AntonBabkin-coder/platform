import React from 'react';
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import cn from 'classnames';
import { useForm, useFieldArray } from 'react-hook-form';
import { sendNewArticle, sendEditArticle } from '../../actions';
import classes from './NewArticle.module.scss';

export const NewArticle = () => {
  const dispatch = useDispatch();
  const { user, articlePage, editPage } = useSelector((state) => state);

  console.log(articlePage.tagList);

  // const pop =  tagList: articlePage.tagList.map((tag) => ({ tagName: tag }));
  // console.log(pop);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      // title: articlePage.title,
      // description: articlePage.description,
      // body: articlePage.body,
      ...articlePage,
      tagList: articlePage.tagList && [...articlePage.tagList.map((tag) => ({ tagName: tag }))],
      // reduce((acc, tag) => (tag.tagName.length ? [...acc, tag.tagName] : acc), []),
      // ({ tagName: tag })),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList',
  });

  const onSubmit = (data) => {
    console.log(data);
    if (editPage) {
      dispatch(
        sendEditArticle(
          {
            ...data,
            tagList: data.tagList.reduce((acc, tag) => (tag.tagName.length ? [...acc, tag.tagName] : acc), []),
          },
          user
        )
      );
    } else {
      dispatch(
        sendNewArticle(
          {
            ...data,
            tagList: data.tagList.reduce((acc, tag) => (tag.tagName.length ? [...acc, tag.tagName] : acc), []),
          },
          user
        )
      );
    }
  };

  return (
    <div className={classes.new__article}>
      {editPage ? (
        <h2 className={classes.title}>Edit article</h2>
      ) : (
        <h2 className={classes.title}>Create new article</h2>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.input__block}>
          <label htmlFor="title" className={classes.description__form}>
            Title
          </label>
          <input {...register('title', { required: true })} id="title" type="text" placeholder="Title" />
          {errors.title && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="description" className={classes.description__form}>
            Short description
          </label>
          <input {...register('description', { required: true })} id="description" type="text" placeholder="Title" />
          {errors.description && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <label htmlFor="body" className={classes.description__form}>
            Text
          </label>
          <textarea
            {...register('body', { required: true })}
            id="body"
            type="text-area"
            className={classes.text__area}
            placeholder="Text"
          />
          {errors.body && <p>It is requared</p>}
        </div>

        <div className={classes.input__block}>
          <div className={classes.edit}>
            <label htmlFor="tag-list" className={classes.description__form}>
              Tags
            </label>
            <div className={classes.input__delete}>
              <ul>
                {fields.map((item, index) => (
                  // return (

                  <li key={item.id}>
                    <input
                      {...register(`tagList.${index}.tagName`)}
                      id="tag-list"
                      type="text"
                      className={classes.tag}
                    />
                    {console.log(index)}
                    {/* <Controller
                      render={({ field }) => <input {...field} />}
                      name={`test.${index}.lastName`}
                      control={control}
                    /> */}

                    <button type="button" className={classes.delete__tag} onClick={() => remove(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <div className={classes.button__add}>
                <button
                  className={classes.add__tag}
                  type="button"
                  onClick={() => {
                    append({ tagName: '' });
                  }}
                >
                  Add tag
                </button>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className={classes.button}>
          Send
        </button>
      </form>
    </div>
  );
};
