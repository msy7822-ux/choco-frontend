// このファイルはあとから消す
import { LayoutComponent } from '../components/templates/LayoutComponent';
import { useRouter } from 'next/router';
import { useState, useRef } from 'react';
import { departments } from './api/departments';
import { merchandiseStatuses } from './api/merchandise_statuses';
import { ImageDisplayer } from '../components/ImageDisplayer';
import { NestedModalComponent } from '../components/NestedModalComponent';
import { CREATE_MERCHANDISE } from '../apollo/queries/create_merchandise_mutation';
import { useMutation } from '@apollo/client';
import {
  Box,
  Input,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const Listing = () => {
  const router = useRouter();
  const submitButtonRef = useRef();

  const [departmentId, setDepartmentId] = useState(0);
  const [imageUrl, setImageUrl] = useState([]);
  const [price, setPrice] = useState(0);
  const [salesFee, setSalesFee] = useState(0);
  const [salesProfit, setSalesProfit] = useState(0);
  const [isMaxImage, setIsMaxImage] = useState(false);
  const [condition, setCondition] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [invalidForm, setInvalidForm] = useState(false);
  const publicStatus = useRef(null);

  const [createMerchandiseMutation] = useMutation(CREATE_MERCHANDISE)

  // 不正なフォームの値が確認された時にページの上部にスクロールする
  const returnTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = () => {
    const invalidCondition =
      title === '' ||
      description === '' ||
      price === 0 ||
      condition === 0 ||
      condition === '' ||
      departmentId === '' ||
      departmentId === 0 ||
      publicStatus.current === null;

    if (invalidCondition) {
      setInvalidForm(true);
      returnTop();
      return;
    }

    setInvalidForm(false);
    createMerchandiseMutation({ variables: {
      title: title,
      description: description,
      price: price,
      publicStatus: publicStatus.current,
      condition: condition,
      department_id: departmentId,
      image: imageUrl === [] ? null : imageUrl,
    } }).then((res) => {
      console.log(res);
      // TODO: セッション周りもう少し丁寧にやりたい
      // (ex: 出品ボタンを押した時点で、ログインが確認できなければアラート出すとか)
      if (res?.errors && res?.errors[0]?.message === 'ログインが見当たりません。') {
        router.push('/login');
        return;
      }
      router.push('/');
    });
  };

  const handleChangePrice = (event) => {
    const totalPrice = event.target.value;
    const fee = Math.round((totalPrice / 100) * 5);
    const profit = totalPrice - fee;
    setSalesFee(fee);
    setSalesProfit(profit);
    setPrice(parseInt(totalPrice, 10));
  }

  // modal用
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 写真アップロード前にデフォルトで、imageの枠を用意する
  const generateImageDisplayer = () => {
    const elements = [];
    for(let i = 1; i <= 3 - (imageUrl.length + 1); i++) {
      elements.push(<ImageDisplayer key={i} />)
    }

    return <Box sx={{ display: 'flex', justifyContent: 'center' }}>{elements}</Box>;
  }

  return (
    <>
      <LayoutComponent>
        <Alert sx={{ display: isMaxImage ? '' : 'none', mx: 'auto', width: '80%' }} severity="error" color="error">
          3枚以上画像を載せることはできません。
        </Alert>

        <Alert sx={{ display: invalidForm ? '' : 'none', mx: 'auto', width: '80%' }} severity="error" color="error">
          「<span style={{ color: 'red' }}>*</span>」が付いている部分は必須項目です。
        </Alert>

        <Box sx={{ maxWidth: '100vh' }}>
          <NestedModalComponent
            open={open}
            handleClose={handleClose}
            selectedImage={selectedImage}
            setImageUrl={setImageUrl}
            imageUrl={imageUrl}
          />

          {/* 商品詳細 */}
          <Box
            sx={{
              textAlign: 'center',
              width: '100%',
              mt: '1.5rem'
            }}
          >
            <FormControl
              variant="standard"
              sx={{
                m: 1,
                mr: 2,
                minWidth: '100%'
              }}
            >
              <InputLabel
                id="select-department"
                sx={{ display: 'flex', justifyContent: 'left', }}
              >
                <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span>
                学部を選択する
              </InputLabel>
              <Select
                labelId="select-department"
                label="学部を選択する"
                defaultValue={''}
                onChange={(e) => {
                  const id = e.target.value
                  setDepartmentId(id);
                }}
              >
                {
                  departments.map((hash, key) => {
                    return (
                      <MenuItem key={key} value={hash.id}>{hash.ja}</MenuItem>
                    );
                  })
                }
              </Select>
              </FormControl>

            <FormControl
              variant="standard"
              sx={{ m: 1, mr: 2, minWidth: '100%', }}
            >
              <InputLabel
                id="select-merchandise-condition"
                sx={{ display: 'flex', justifyContent: 'left', }}
              >
                <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span>
                商品の状態を選択する
              </InputLabel>
              <Select
                labelId="select-merchandise-condition"
                label="商品の状態"
                defaultValue={''}
                onChange={(e) => {
                  const id = e.target.value
                  setCondition(id)
                }}
              >
                {
                  merchandiseStatuses.map((hash, key) => {
                    return (
                      <MenuItem key={key} value={hash.id}>{hash.ja}</MenuItem>
                    );
                  })
                }
              </Select>
            </FormControl>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'left',
                mt: '2.5rem'
              }}
            >
              <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span>
              <Input
                placeholder='(必須) 商品の名前'
                sx={{ p: 0, width: '100%' }}
                onChange={(e) => { setTitle(e.target.value) }}
              />
            </Box>
            <Box
              sx={{
                mt: '2rem',
                display: 'flex',
                justifyContent: 'left',
              }}
            >
              <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span>
              <TextField
                placeholder={`商品の説明\n(任意、1000文字まで)\n(商品の状態、定価、注意点など)\n\n例：2020年に大学の講義で使用した経済学の参考書です。基本的に半期の授業でしか使用していないので状態は非常に良いです。`}
                variant="standard"
                style={{ width: '100%' }}
                multiline
                onChange={(e) => { setDescription(e.target.value) }}
              />
            </Box>

            <Box
              sx={{
                mt: '2rem',
                color: '#A9A9A9'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                }}
              >
                <span style={{ color: 'red', fontSize: '1.2rem' }}>*</span>
                <TextField
                  sx={{ width: '100%' }}
                  id="standard-number"
                  label="販売価格(300 ~ 9,999,999)"
                  placeholder='¥0'
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  onChange={handleChangePrice}
                  variant="standard"
                />
              </Box>

              <Box sx={{ borderBottom: '1px solid #818181', pb: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '2rem' }}>
                  <Box>販売手数料(5%)</Box>
                  <Box>¥{salesFee}</Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Box>販売利益</Box>
                  <Box>¥{salesProfit}</Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: '2rem' }}>
            <Button
              ref={submitButtonRef}
              sx={{
                width: '100%',
                bgcolor: '#FA5959',
                color: '#FFF',
              }}
              onClick={() => {
                submitButtonRef.current.style.backgroundColor = '#FA5959'
                publicStatus.current = 0
                handleSubmit();
              }}
            >
                出品する
              </Button>
            <Button
              sx={{
                width: '100%',
                mt: '1rem'
              }}
              color='error'
              variant="outlined"
              onClick={() => {
                publicStatus.current = 1
                handleSubmit();
              }}
            >
              下書き保存する
            </Button>
          </Box>
          <Box sx={{ mb: '7rem' }}/>
        </Box>
      </LayoutComponent>
    </>
  );
};

export default Listing;
