import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyImgDirective } from '../../lazy-img.directive';
import { BackToTopBtnComponent } from '../../utility/back-to-top-btn/back-to-top-btn.component';
import { NgxGistModule } from '@ekkolon/ngx-gist';

@Component({
  selector: 'app-ecs',
  standalone: true,
  imports: [ RouterModule, LazyImgDirective, BackToTopBtnComponent, NgxGistModule ],
  templateUrl: './ecs.component.html',
  styleUrl: './ecs.component.scss'
})
export class EcsComponent {

  	readonly codeContainer = [
// Component ID showcase
`
`,
`// ComponentManager.h
class ComponentManager
{
public:
	template<typename T>
	void RegisterComponent(size_t aMaxSize)
	{
		T::componentId = myComponentContainers.size();
		myComponentContainers.push_back(new ComponentContainer<T>(aMaxSize));
	}
private:
  template<typename T>
  ComponentContainer<T>* GetComponentContainer() const
  {
    cid_t cid = T::componentId;
    assert(cid < myNextComponentId && "Component not registered before use.");
    return (ComponentContainer<T>*)myComponentContainers[cid];
  }
}`,


// Component ID usage showcase
`class ComponentManager
{
public:
	template<typename T>
	T& GetComponent(const Entity& aEntity) const
	{
		assert(myEntitySignatureCollection.GetComponentSignature(aEntity).test(T::componentId) && "Entity does not exist in ComponentContainer");
		return GetComponentContainer<T>()->GetComponent(myEntitySignatureCollection.GetSignatureIndex(aEntity, T::componentId));
	}
private:
	template<typename T>
	ComponentContainer<T>* GetComponentContainer() const
	{
		cid_t cid = T::componentId;

		assert(cid < myNextComponentId && "Component not registered before use.");

		return static_cast<ComponentContainer<T>*>(myComponentContainers.at(cid));
	}
};
`
];
}
