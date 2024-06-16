import { Add } from '@mui/icons-material';
import DocumentSelect from '../components/DocumentListItem';
import MappingInputs from '../components/MappingInputs';
import templateList from '../constants/templatesList';

const TemplateGeneration = () => {
  return (
    <div className="template-generation-wrapper">
      <h2>Генерация шаблонов</h2>
      <div className="template-generation-block-wrapper">
        {templateList.map(item => (
          <div key={item.id} className="template-generation-block">
            <p>{item.date}</p>
            <h3>Название документа</h3>
            <select>
              <option value="1">Категория 1</option>
              <option value="2">Категория 2</option>
              <option value="3">Категория 3</option>
            </select>
            <select>
              <option value="1">Тип 1</option>
              <option value="2">Тип 2</option>
              <option value="3">Тип 3</option>
            </select>
            <button>
              <Add />
              Создать
            </button>
          </div>
        ))}
        <button className="template-create">
          <Add />
          Создать
        </button>
      </div>
      <hr />
      <div className="template-generation-working-zone">
        <div className="document-select-wrapper">
          <ul>
            <li>Название документа</li>
            <li>Категория</li>
            <li>Тип</li>
            <li>Дата</li>
          </ul>
          {templateList.map(item => (
            <DocumentSelect key={item.id} />
          ))}
        </div>
        <div className="mapping-inputs-wrapper">
          <MappingInputs />
        </div>
      </div>
    </div>
  );
};

export default TemplateGeneration;
